export const handleApiError = (error: unknown) => {
  if (
    typeof error === 'object' &&
    error !== null &&
    'message' in error
  ) {
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

    console.error('Erro na requisição:', {
      status: err.response?.status,
      message: err.response?.data?.message || err.message,
      url: err.config?.url,
      method: err.config?.method,
      data: err.config?.data
    });

    throw new Error(err.response?.data?.message || 'Erro na operação');
  }

  console.error('Erro desconhecido:', error);
  throw new Error('Erro desconhecido');
};
