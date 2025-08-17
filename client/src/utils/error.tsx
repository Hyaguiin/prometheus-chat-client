export const handleApiError = (error: any) => {
  console.error('Erro na requisição:', {
    status: error.response?.status,
    message: error.response?.data?.message || error.message,
    url: error.config?.url,
    method: error.config?.method,
    data: error.config?.data
  });
  
  throw new Error(error.response?.data?.message || 'Erro na operação');
};