import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { motion } from "framer-motion";
import { Save, X, Upload, Image as ImageIcon, ArrowLeft } from "lucide-react";
import { supabase, uploadBlogImage, deleteBlogImage } from "../../lib/supabase";

const MenuBar = ({ editor }) => {
  if (!editor) return null;

  const buttons = [
    { label: "B", onClick: () => editor.chain().focus().toggleBold().run(), active: editor.isActive("bold") },
    { label: "I", onClick: () => editor.chain().focus().toggleItalic().run(), active: editor.isActive("italic") },
    { label: "S", onClick: () => editor.chain().focus().toggleStrike().run(), active: editor.isActive("strike") },
    { label: "H1", onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(), active: editor.isActive("heading", { level: 1 }) },
    { label: "H2", onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(), active: editor.isActive("heading", { level: 2 }) },
    { label: "¶", onClick: () => editor.chain().focus().toggleParagraph().run(), active: editor.isActive("paragraph") },
    { label: "•", onClick: () => editor.chain().focus().toggleBulletList().run(), active: editor.isActive("bulletList") },
    { label: "1.", onClick: () => editor.chain().focus().toggleOrderedList().run(), active: editor.isActive("orderedList") },
    { label: "❞", onClick: () => editor.chain().focus().toggleBlockquote().run(), active: editor.isActive("blockquote") },
    { label: "Code", onClick: () => editor.chain().focus().toggleCodeBlock().run(), active: editor.isActive("codeBlock") },
    { label: "Link", onClick: () => {
      const url = window.prompt("Masukkan URL:");
      if (url) editor.chain().focus().setLink({ href: url }).run();
    }, active: editor.isActive("link") },
  ];

  const handleImageUpload = async (file) => {
    if (!file) return;
    try {
      // Create a temporary ID, or use blog ID if editing
      const blogId = window.location.pathname.split("/").pop() || Date.now().toString();
      const url = await uploadBlogImage(file, blogId);
      if (url) {
        editor.chain().focus().setImage({ src: url }).run();
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Gagal mengupload gambar.");
    }
  };

  return (
    <div className="flex z-10 flex-wrap items-center gap-1 p-2 bg-(--bg-secondary) border-b border-(--border-color) rounded-t-lg">
      {buttons.map((btn, i) => (
        <button
          key={i}
          type="button"
          onClick={btn.onClick}
          className={`px-3 py-1.5 text-sm font-bold rounded transition-all ${
            btn.active
              ? "bg-(--accent-blue) text-white"
              : "text-(--text-muted) hover:text-(--text-primary) hover:bg-(--bg-primary)"
          }`}
        >
          {btn.label}
        </button>
      ))}

      <div className="w-px h-6 bg-(--border-color) mx-1"></div>

      <button
        type="button"
        onClick={() => {
          const fileInput = document.createElement("input");
          fileInput.type = "file";
          fileInput.accept = "image/*";
          fileInput.onchange = (e) => handleImageUpload(e.target.files[0]);
          fileInput.click();
        }}
        className="px-3 py-1.5 text-sm font-bold rounded transition-all flex items-center gap-1 text-(--text-muted) hover:text-(--text-primary) hover:bg-(--bg-primary)"
        title="Upload Gambar"
      >
        <ImageIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

const BlogEditor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = !!id;
  const [loading, setLoading] = useState(false);
  const [coverFile, setCoverFile] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      status: "draft",
      is_pinned: false,
      cover_image: "",
    },
  });

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        link: false, // Disable link from StarterKit to avoid duplication
      }),
      Image.configure({ inline: true }),
      Link.configure({ openOnClick: false }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class: "prose prose-invert max-w-none focus:outline-none min-h-[400px] p-4",
      },
    },
    onUpdate: ({ editor }) => {
      setValue("content", editor.getHTML());
    },
  });

  useEffect(() => {
    if (isEditing) {
      fetchPost();
    }
    return () => {
      if (editor) editor.destroy();
    };
  }, [id]);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title" && !isEditing) {
        const slug = value.title
          ?.toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
        setValue("slug", slug);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, isEditing]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase.from("posts").select("*").eq("id", id).single();
      if (error) throw error;

      setValue("title", data.title);
      setValue("slug", data.slug);
      setValue("excerpt", data.excerpt);
      setValue("content", data.content);
      setValue("status", data.status);
      setValue("is_pinned", data.is_pinned);
      setValue("cover_image", data.cover_image);
      setCoverPreview(data.cover_image);

      if (editor && data.content) {
        editor.commands.setContent(data.content);
      }
    } catch (error) {
      console.error("Error fetching post:", error);
      alert("Gagal memuat blog");
    }
  };

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverFile(file);
      setCoverPreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      let coverUrl = data.cover_image;

      // Upload cover image if new file selected
      if (coverFile) {
        const blogId = isEditing ? id : Date.now().toString();
        coverUrl = await uploadBlogImage(coverFile, blogId);

        // Delete old image if editing
        if (isEditing && data.cover_image) {
          await deleteBlogImage(data.cover_image);
        }
      }

      const postData = {
        ...data,
        cover_image: coverUrl,
        updated_at: new Date().toISOString(),
      };

      if (isEditing) {
        const { error } = await supabase.from("posts").update(postData).eq("id", id);
        if (error) throw error;
      } else {
        postData.created_at = new Date().toISOString();
        const { error } = await supabase.from("posts").insert([postData]);
        if (error) throw error;
      }

      navigate("/admin/blog");
    } catch (error) {
      console.error("Error saving post:", error);
      alert("Gagal menyimpan blog: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-3xl font-outfit font-bold text-(--text-primary) uppercase tracking-tighter">
              {isEditing ? "Edit Blog" : "Tulis Blog Baru"}
            </h1>
            <p className="text-(--text-muted) mt-1">
              {isEditing ? "Edit konten blog Anda" : "Buat blog baru yang menarik"}
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title & Slug */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-(--text-muted) mb-2">
                Judul Blog *
              </label>
              <input
                type="text"
                {...register("title", { required: "Judul wajib diisi" })}
                className="w-full px-4 py-3 bg-(--bg-primary) border border-(--border-color) rounded-lg text-(--text-primary) placeholder-(--text-muted) focus:outline-none focus:border-(--accent-blue) transition-all text-lg"
                placeholder="Masukkan judul blog..."
              />
              {errors.title && <p className="mt-2 text-red-500 text-sm">{errors.title.message}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-(--text-muted) mb-2">
                Slug (URL) *
              </label>
              <input
                type="text"
                {...register("slug", { required: "Slug wajib diisi" })}
                className="w-full px-4 py-3 bg-(--bg-primary) border border-(--border-color) rounded-lg text-(--text-primary) placeholder-(--text-muted) focus:outline-none focus:border-(--accent-blue) transition-all font-mono text-sm"
                placeholder="judul-blog-anda"
              />
              {errors.slug && <p className="mt-2 text-red-500 text-sm">{errors.slug.message}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-(--text-muted) mb-2">
                Deskripsi Singkat *
              </label>
              <textarea
                {...register("excerpt", {
                  required: "Deskripsi wajib diisi",
                  maxLength: { value: 200, message: "Maksimal 200 karakter" },
                })}
                rows={3}
                className="w-full px-4 py-3 bg-(--bg-primary) border border-(--border-color) rounded-lg text-(--text-primary) placeholder-(--text-muted) focus:outline-none focus:border-(--accent-blue) transition-all resize-none"
                placeholder="Deskripsi singkat untuk preview..."
              />
              {errors.excerpt && <p className="mt-2 text-red-500 text-sm">{errors.excerpt.message}</p>}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Cover Image */}
            <div className="glass-2 rounded-lg p-4 border border-(--border-color)">
              <label className="block text-xs font-bold uppercase tracking-widest text-(--text-muted) mb-3">
                Gambar Cover
              </label>
              <div className="space-y-3">
                {coverPreview && (
                  <div className="aspect-video rounded-lg overflow-hidden bg-(--bg-secondary)">
                    <img src={coverPreview} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
                <label className="flex items-center justify-center gap-2 w-full py-3 border-2 border-dashed border-(--border-color) rounded-lg cursor-pointer hover:border-(--accent-blue) transition-colors">
                  <Upload className="w-5 h-5 text-(--text-muted)" />
                  <span className="text-sm text-(--text-muted)">Upload Gambar</span>
                  <input type="file" accept="image/*" onChange={handleCoverChange} className="hidden" />
                </label>
              </div>
            </div>

            {/* Status */}
            <div className="glass-2 rounded-lg p-4 border border-(--border-color)">
              <label className="block text-xs font-bold uppercase tracking-widest text-(--text-muted) mb-3">
                Status
              </label>
              <select
                {...register("status")}
                className="w-full px-4 py-3 bg-(--bg-primary) border border-(--border-color) rounded-lg text-(--text-primary) focus:outline-none focus:border-(--accent-blue) transition-all"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>

            {/* Pin */}
            <div className="glass-2 rounded-lg p-4 border border-(--border-color)">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  {...register("is_pinned")}
                  className="w-5 h-5 rounded bg-(--bg-primary) border-(--border-color) text-(--accent-blue) focus:ring-(--accent-blue)"
                />
                <div>
                  <p className="text-sm font-bold text-(--text-primary)">Pin Blog</p>
                  <p className="text-xs text-(--text-muted)">Tampilkan di bagian atas homepage</p>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Content Editor */}
        <div className="glass-2 rounded-lg border border-(--border-color) overflow-hidden">
          <div className="p-4 border-b border-(--border-color)">
            <label className="block text-xs font-bold uppercase tracking-widest text-(--text-muted)">
              Konten Blog *
            </label>
          </div>
          <MenuBar editor={editor} />
          <EditorContent editor={editor} className="bg-(--bg-primary) rounded-b-lg" />
          {errors.content && <p className="p-4 text-red-500 text-sm">{errors.content.message}</p>}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-4 pt-6 border-t border-(--border-color)">
          <button
            type="button"
            onClick={() => navigate("/admin/blog")}
            className="px-6 py-3 border border-(--border-color) text-(--text-primary) font-bold uppercase text-xs tracking-widest rounded-lg hover:bg-(--bg-secondary) transition-all flex items-center gap-2"
          >
            <X className="w-4 h-4" />
            Batal
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-(--text-primary) text-(--bg-primary) font-bold uppercase text-xs tracking-widest rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            {loading ? "Menyimpan..." : isEditing ? "Update Blog" : "Publish Blog"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogEditor;
