"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import UserPosts from "./UserPosts";

interface UserData {
  name: string;
  email: string;
  role: string;
}

export default function Perfil() {
  const { data: session, update } = useSession();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  useEffect(() => {
    if (session?.user) {
      setUserData({
        name: session.user.name || "",
        email: session.user.email || "",
        role: session.user.role || "USER",
      });
      setFormData((prev) => ({ ...prev, name: session.user.name || "" }));
    }
  }, [session]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setFormData((prev) => ({ ...prev, name: userData?.name || "" }));
    }
    setMessage(null);
  };

  const handlePasswordEditToggle = () => {
    setIsEditingPassword(!isEditingPassword);
    setFormData((prev) => ({
      ...prev,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    }));
    setMessage(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = async () => {
    if (!formData.name.trim()) {
      setMessage({ type: "error", text: "El nombre no puede estar vacío" });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/auth/profile/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          text: "Perfil actualizado correctamente",
        });
        setUserData((prev) => (prev ? { ...prev, name: formData.name } : null));
        setIsEditing(false);
        // Actualizar la sesión
        await update();
      } else {
        setMessage({
          type: "error",
          text: data.error || "Error al actualizar el perfil",
        });
      }
    } catch {
      setMessage({ type: "error", text: "Error de conexión" });
    } finally {
      setLoading(false);
    }
  };

  const handleSavePassword = async () => {
    if (
      !formData.currentPassword ||
      !formData.newPassword ||
      !formData.confirmPassword
    ) {
      setMessage({ type: "error", text: "Todos los campos son requeridos" });
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setMessage({ type: "error", text: "Las contraseñas no coinciden" });
      return;
    }

    if (formData.newPassword.length < 6) {
      setMessage({
        type: "error",
        text: "La contraseña debe tener al menos 6 caracteres",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/auth/profile/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password: formData.newPassword,
          currentPassword: formData.currentPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          text: "Contraseña actualizada correctamente",
        });
        setIsEditingPassword(false);
        setFormData((prev) => ({
          ...prev,
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }));
      } else {
        setMessage({
          type: "error",
          text: data.error || "Error al actualizar la contraseña",
        });
      }
    } catch {
      setMessage({ type: "error", text: "Error de conexión" });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = () => {
    if (
      confirm(
        "¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede deshacer."
      )
    ) {
      // Implementar lógica de eliminación de cuenta
      alert("Funcionalidad de eliminación de cuenta en desarrollo");
    }
  };

  if (!session?.user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">
          Debes iniciar sesión para ver tu perfil
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      <div className="px-4">
        {/* Header */}
        <div className="px-6 py-8 border-b-1 border-[#E2E7E7]">
          <h1 className="text-3xl font-bold text-[#009674] mb-2">Mi Perfil</h1>
          <p className="text-gray-600">
            Gestiona tu información personal y revisa tu actividad
          </p>
        </div>

        <div className="flex max-lg:flex-col gap-6 max-lg:justify-items-center w-full">
          {/* Información del Perfil */}
          <div className="lg:col-span-1  w-full lg:w-[350px] lg:border-r-1 border-[#E2E7E7]">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Información Personal
                </h2>
              </div>

              {message && (
                <div
                  className={`mb-4 p-3 rounded-md ${
                    message.type === "success"
                      ? "bg-green-100 text-green-700 border border-green-200"
                      : "bg-red-100 text-red-700 border border-red-200"
                  }`}
                >
                  {message.text}
                </div>
              )}

              <div className="space-y-4">
                {/* Nombre */}
                <div>
                  <div className="flex justify-between">
                    <label className="block text-sm font-medium text-gray-700 mb-1 ">
                      Nombre de Usuario
                    </label>
                    <button
                      onClick={handleEditToggle}
                      className="text-[#009674] hover:text-[#007a5a] transition-colors"
                    >
                      <i className="material-icons text-lg text-[#aaa]! cursor-pointer">
                        {isEditing ? "close" : "edit"}
                      </i>
                    </button>
                  </div>

                  {isEditing ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009674] focus:border-transparent"
                        placeholder="Tu nombre de usuario"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={handleSaveProfile}
                          disabled={loading}
                          className="px-4 py-2 bg-[#009674] text-white rounded-md hover:bg-[#007a5a] transition-colors disabled:opacity-50"
                        >
                          {loading ? "Guardando..." : "Guardar"}
                        </button>
                        <button
                          onClick={handleEditToggle}
                          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-900 font-medium">
                      {userData?.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <p className="text-gray-900">{userData?.email}</p>
                </div>

                {/* Rol */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rol
                  </label>
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      userData?.role === "ADMIN"
                        ? "bg-red-100 text-red-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {userData?.role === "ADMIN" ? "Administrador" : "Usuario"}
                  </span>
                </div>

                {/* Cambiar Contraseña */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      Contraseña
                    </h3>
                    <button
                      onClick={handlePasswordEditToggle}
                      className="text-[#009674] hover:text-[#007a5a] transition-colors"
                    >
                      <i className="material-icons text-lg text-[#aaa]! cursor-pointer">
                        {isEditingPassword ? "close" : "edit"}
                      </i>
                    </button>
                  </div>

                  {isEditingPassword && (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Contraseña Actual
                        </label>
                        <input
                          type="password"
                          name="currentPassword"
                          value={formData.currentPassword}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009674] focus:border-transparent"
                          placeholder="Tu contraseña actual"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Nueva Contraseña
                        </label>
                        <input
                          type="password"
                          name="newPassword"
                          value={formData.newPassword}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009674] focus:border-transparent"
                          placeholder="Nueva contraseña"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Confirmar Nueva Contraseña
                        </label>
                        <input
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009674] focus:border-transparent"
                          placeholder="Confirma la nueva contraseña"
                        />
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={handleSavePassword}
                          disabled={loading}
                          className="px-4 py-2 bg-[#009674] text-white rounded-md hover:bg-[#007a5a] transition-colors disabled:opacity-50"
                        >
                          {loading ? "Guardando..." : "Cambiar Contraseña"}
                        </button>
                        <button
                          onClick={handlePasswordEditToggle}
                          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Eliminar Cuenta */}
                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={handleDeleteAccount}
                    className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                  >
                    <i className="material-icons text-sm mr-2">delete</i>
                    Eliminar Cuenta
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Posts del Usuario */}
          <div className="w-full">
            <div className="p-6 w-full">
              <UserPosts userId={session.user.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
