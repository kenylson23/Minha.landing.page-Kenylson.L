const { z } = require('zod');

// Schema de validação para o formulário de contato
const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(9, 'Telefone deve ter pelo menos 9 dígitos'),
  projectType: z.string().min(1, 'Tipo de projeto é obrigatório'),
  budget: z.string().min(1, 'Orçamento é obrigatório'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres')
});

// Armazenamento em memória (para demonstração)
let contacts = [];
let nextId = 1;

exports.handler = async (event, context) => {
  // Configurar CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod === 'POST') {
    try {
      const data = JSON.parse(event.body);
      
      // Validar dados
      const validatedData = contactSchema.parse(data);
      
      // Criar contato
      const contact = {
        id: nextId++,
        ...validatedData,
        createdAt: new Date().toISOString()
      };
      
      contacts.push(contact);
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: 'Mensagem enviada com sucesso!',
          contact
        })
      };
    } catch (error) {
      if (error.name === 'ZodError') {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            success: false,
            message: 'Dados inválidos',
            errors: error.errors
          })
        };
      }
      
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Erro interno do servidor'
        })
      };
    }
  }

  if (event.httpMethod === 'GET') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        contacts
      })
    };
  }

  return {
    statusCode: 405,
    headers,
    body: JSON.stringify({
      success: false,
      message: 'Método não permitido'
    })
  };
};