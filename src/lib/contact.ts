// Edite aqui as informações de contato da Dra. Giullia
export const WHATSAPP_NUMBER = "55XXXXXXXXXXX"; // Substitua pelo número real
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá Dra. Giullia! Gostaria de agendar uma consulta."
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
