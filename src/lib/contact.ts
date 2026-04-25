// Edite aqui as informações de contato da Dra. Giullia
// Número do WhatsApp (somente dígitos: país + DDD + número)
export const WHATSAPP_NUMBER = "554195910390";

// Mensagem inicial (pré-preenchida) ao abrir o WhatsApp
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo Instagram e gostaria de agendar uma consulta."
);

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const CONTACT_INFO = {
  city: "Curitiba",
  state: "PR",
  address: "Rua Exemplo, 123 - Centro",
  hours: [
    { day: "Segunda a Sexta", time: "08h às 18h" },
    { day: "Sábado", time: "08h às 12h" },
    { day: "Domingo", time: "Fechado" },
  ],
};
