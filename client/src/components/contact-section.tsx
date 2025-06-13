import { useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { insertContactSchema } from '@shared/schema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const contactFormSchema = insertContactSchema.extend({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(9, 'Telefone deve ter pelo menos 9 dígitos'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres')
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      message: ''
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entrarei em contato em breve.",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error: any) => {
      toast({
        title: "Erro ao enviar mensagem",
        description: error.message || "Tente novamente mais tarde.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Telefone",
      subtitle: "Disponível para chamadas",
      content: "+244 949639932",
      href: "tel:+244949639932"
    },
    {
      icon: <Mail size={24} />,
      title: "E-mail",
      subtitle: "Resposta rápida garantida",
      content: "kenylson@exemplo.com",
      href: "mailto:kenylson@exemplo.com"
    },
    {
      icon: <MapPin size={24} />,
      title: "Localização",
      subtitle: "Disponível remotamente",
      content: "Angola, Luanda",
      href: null
    }
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" }
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 neon-text">CONTATO</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pronto para dar vida ao seu próximo projeto? Entre em contato e vamos criar algo incrível juntos!
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-primary/20 hover:border-primary/60 transition-all duration-500 group cursor-magnetic"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <motion.div
                    className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <div className="text-primary">
                      {info.icon}
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-gray-400">{info.subtitle}</p>
                  </div>
                </div>
                {info.href ? (
                  <a 
                    href={info.href}
                    className="text-2xl font-mono text-primary hover:text-green-400 transition-colors duration-300"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-lg text-primary">{info.content}</p>
                )}
              </motion.div>
            ))}
            
            {/* Social Links */}
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center hover:bg-primary/20 transition-colors duration-300 group cursor-magnetic"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <div className="text-primary group-hover:text-green-400 transition-colors duration-300">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          {/* Contact Form */}
          <motion.div
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-primary/20"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400">Nome</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Seu nome completo"
                            className="bg-black border-gray-600 focus:border-primary text-white"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400">E-mail</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="seu@email.com"
                            className="bg-black border-gray-600 focus:border-primary text-white"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400">Telefone</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+244 123 456 789"
                          className="bg-black border-gray-600 focus:border-primary text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400">Tipo de Projeto</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-black border-gray-600 focus:border-primary text-white">
                            <SelectValue placeholder="Selecione o tipo de projeto" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-black border-gray-600">
                          <SelectItem value="website">Website Institucional</SelectItem>
                          <SelectItem value="ecommerce">E-commerce</SelectItem>
                          <SelectItem value="mobile">Aplicativo Mobile</SelectItem>
                          <SelectItem value="system">Sistema Web</SelectItem>
                          <SelectItem value="api">API/Backend</SelectItem>
                          <SelectItem value="consulting">Consultoria</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400">Orçamento</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-black border-gray-600 focus:border-primary text-white">
                            <SelectValue placeholder="Selecione a faixa de orçamento" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-black border-gray-600">
                          <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k+">$25,000+</SelectItem>
                          <SelectItem value="discuss">Vamos discutir</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400">Mensagem</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Conte-me mais sobre seu projeto..."
                          className="bg-black border-gray-600 focus:border-primary text-white resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-primary text-black font-semibold rounded-lg hover:bg-green-400 transition-all duration-300 neon-glow cursor-magnetic"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                    <Send className="ml-2" size={16} />
                  </Button>
                </motion.div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
