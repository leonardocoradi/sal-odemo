export const BUSINESS = {
  name: 'Studio Bella', shortName: 'STUDIO BELLA', whatsapp: '5549999999999',
  whatsappMessage: 'Olá! Vi o site do Studio Bella e gostaria de agendar um horário. 😊',
  instagram: '@studiobella', instagramUrl: 'https://instagram.com/studiobella', phone: '(49) 99999-9999',
  address: 'Av. Getúlio Vargas, 1250 — Centro',
  hours: ['Segunda a sexta: 09h às 19h', 'Sábado: 09h às 17h', 'Domingo: Fechado'],
  stats: [{number:'+5',label:'anos de experiência'},{number:'+2.000',label:'clientes'},{number:'4,9/5',label:'avaliação média'}],
  services: [
    {name:'Corte & Finalização', price:'A partir de R$80', description:'Cortes autorais e finalização que respeitam seu estilo.', image:'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=85'},
    {name:'Coloração', price:'A partir de R$180', description:'Cor personalizada, luminosa e com acabamento impecável.', image:'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=85'},
    {name:'Mechas', price:'A partir de R$250', description:'Loiros, luzes e nuances criadas especialmente para você.', image:'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=85'},
    {name:'Manicure & Pedicure', price:'A partir de R$50', description:'Cuidado, precisão e beleza em cada detalhe.', image:'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=85'},
    {name:'Design de Sobrancelhas', price:'A partir de R$40', description:'Harmonia e expressão para valorizar seu olhar.', image:'https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=800&q=85'},
    {name:'Tratamentos Capilares', price:'A partir de R$120', description:'Tecnologia e cuidado para fios mais saudáveis e radiantes.', image:'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=85'}],
  team: [
    {name:'Marina Oliveira', role:'Especialista em Colorimetria', image:'https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&w=800&q=85'},
    {name:'Juliana Costa', role:'Especialista em Corte e Visagismo', image:'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=85'},
    {name:'Camila Mendes', role:'Especialista em Unhas e Nail Art', image:'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=85'}],
  testimonials: [
    {text:'Desde o primeiro atendimento me senti muito bem recebida. O resultado ficou exatamente como eu queria.',name:'Ana Paula'}, {text:'Ambiente lindo, atendimento impecável e profissionais excelentes.',name:'Fernanda'}, {text:'Já virei cliente fiel. Recomendo de olhos fechados.',name:'Juliana'}, {text:'Uma experiência maravilhosa do início ao fim.',name:'Mariana'}]
} as const;
export const whatsappLink = (service?: string) => `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(service ? `${BUSINESS.whatsappMessage}\n\nTenho interesse em: ${service}.` : BUSINESS.whatsappMessage)}`;
