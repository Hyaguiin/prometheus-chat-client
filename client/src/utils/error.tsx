export const handleApiError = (error: unknown): never => {
  if (typeof error === "object" && error !== null) {
    // Tenta inferir erro do axios ou fetch
    const err = error as {
      response?: {
        status?: number;
        data?: { message?: string };
      };
      message?: string;
      config?: {
        url?: string;
        method?: string;
        data?: unknown;
      };
    };

    const status = err.response?.status;
    const dataMessage = err.response?.data?.message;
    const message = dataMessage || err.message || "Erro na operação";

    console.error("Erro na requisição:", {
      status,
      message,
      url: err.config?.url,
      method: err.config?.method,
      data: err.config?.data,
      fullError: err,
    });

    throw new Error(message);
  }

  console.error("Erro desconhecido:", error);
  throw new Error(
    typeof error === "string"
      ? error
      : "Erro desconhecido"
  );
};
