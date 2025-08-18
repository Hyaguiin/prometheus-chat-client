"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMail, FiLock, FiUser, FiMapPin, FiCalendar } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import { handleApiError } from "@/utils/error";
import { AuthService } from "@/services/authService";
import { registerCredentials } from "@/interfaces/userDTO";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [secondname, setSecondname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cep, setCep] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError("");


  const body: registerCredentials = {
    name,
    secondname,
    email,
    password,
    cep,
    birthdate,
  };

  try {
    const response = await AuthService.register(body);


    toast.success("Registro realizado com sucesso! 🎉");
    router.push("/login");
  } catch (error: unknown) {
    try {
      handleApiError(error);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        toast.error(err.message);
        console.error("Erro ao registrar:", err.message);
      } else {
        setError("Erro desconhecido ao registrar.");
        toast.error("Erro desconhecido ao registrar.");
        console.error("Erro desconhecido ao registrar:", err);
      }
    }
  } finally {
    setLoading(false);
  }
};


  const handleGoogleRegister = () => {
    toast.info("Registro com Google ainda não implementado.");
    console.log("Registro com Google acionado");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 font-inter bg-gradient-to-br from-[#1A1A1A] via-[#2C2C2C] to-[#F2D04D]/40">
      <div className="w-full max-w-md rounded-3xl p-8 shadow-2xl backdrop-blur-lg bg-white/10 border border-white/10 text-white">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#2C2C2C] to-[#F2D04D]/70 flex items-center justify-center text-5xl text-white shadow-lg">
            <FiUser />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-6 text-center select-none group">
            <h1 className="text-3xl font-mono font-semibold tracking-wide text-[#F2D04D] transition-all duration-300 ease-in-out group-hover:text-[#f5d000] group-hover:drop-shadow-[0_0_6px_#f5d000]">
              _Prometheus I.A
            </h1>
            <div className="mt-2 h-[2px] w-36 mx-auto bg-gradient-to-r from-[#F2D04D] to-transparent rounded-full transition-all duration-300 ease-in-out group-hover:w-52" />
          </div>

          <div className="relative">
            <FiUser className="absolute left-3 top-3 text-black" />
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border-b border-gray-400/50 focus:outline-none focus:border-[#F2D04D] placeholder-gray-400 text-white"
            />
          </div>

          <div className="relative">
            <FiUser className="absolute left-3 top-3 text-black" />
            <input
              type="text"
              placeholder="Sobrenome"
              value={secondname}
              onChange={(e) => setSecondname(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border-b border-gray-400/50 focus:outline-none focus:border-[#F2D04D] placeholder-gray-400 text-white"
            />
          </div>

          <div className="relative">
            <FiMail className="absolute left-3 top-3 text-black" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border-b border-gray-400/50 focus:outline-none focus:border-[#F2D04D] placeholder-gray-400 text-white"
            />
          </div>

          <div className="relative">
            <FiLock className="absolute left-3 top-3 text-black" />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border-b border-gray-400/50 focus:outline-none focus:border-[#F2D04D] placeholder-gray-400 text-white"
            />
          </div>

          <div className="relative">
            <FiMapPin className="absolute left-3 top-3 text-black" />
            <input
              type="text"
              placeholder="CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              required
              pattern="\d{5}-?\d{3}"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border-b border-gray-400/50 focus:outline-none focus:border-[#F2D04D] placeholder-gray-400 text-white"
            />
          </div>

          <div className="relative">
            <FiCalendar className="absolute left-3 top-3 text-black" />
            <input
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border-b border-gray-400/50 focus:outline-none focus:border-[#F2D04D] placeholder-gray-400 text-white"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-[#0008] font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_#F2D04D] hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Registrando..." : "REGISTRAR"}
          </button>

          <button
            type="button"
            onClick={handleGoogleRegister}
            aria-label="Registrar com Google"
            className="w-full flex items-center justify-center gap-3 py-3 rounded-lg bg-gradient-to-r from-[#2C2C2C]/80 via-[#1A1A1A]/80  font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_5px_#F2D04D] hover:scale-105 mt-4"
          >
            <FcGoogle size={24} />
            Registrar com Google
          </button>

          <p className="text-sm text-gray-300 text-center mt-4">
            Já tem uma conta?{" "}
            <Link
              href="/login"
              className="text-[#F2D04D] hover:text-white font-semibold transition"
            >
              Entrar
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
