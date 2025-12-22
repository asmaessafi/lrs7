import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n";

export function ContactForm() {
  const { toast } = useToast();
  const { t } = useLanguage();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    toast({
      title: t("contact.form.toast.title"),
      description: t("contact.form.toast.description"),
    });
    form.reset();
  };

  return (
    <div className="relative max-w-3xl mx-auto py-16 px-4">
      {/* ✨ El Glow mta3 About (Blue & Cyan) */}
      <div className="absolute -inset-6 bg-gradient-to-br from-blue-400/20 via-cyan-300/20 to-indigo-500/20 rounded-3xl blur-3xl opacity-60 animate-pulse" style={{ animationDuration: '8000ms' }} />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn(
            "relative space-y-10 bg-white/80 backdrop-blur-2xl rounded-[2.5rem] p-10 md:p-16",
            "shadow-2xl border border-white/40 overflow-hidden"
          )}
          data-testid="form-contact"
        >
          {/* Header m3a el Underline (kima about) */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent italic">
              {t("contact.form.title")}
            </h2>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full opacity-40" />
            <p className="text-lg text-gray-600 italic">
              {t("contact.form.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-blue-700/80 font-medium italic ml-1">
                    {t("contact.form.name")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("contact.form.name.placeholder")}
                      className="h-14 rounded-2xl border-blue-100 bg-white/50 focus:border-blue-400 focus:ring-4 focus:ring-blue-100/30 text-gray-700 placeholder:text-gray-400 transition-all duration-300 italic"
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
                  <FormLabel className="text-blue-700/80 font-medium italic ml-1">
                    {t("contact.form.email")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={t("contact.form.email.placeholder")}
                      className="h-14 rounded-2xl border-blue-100 bg-white/50 focus:border-blue-400 focus:ring-4 focus:ring-blue-100/30 text-gray-700 placeholder:text-gray-400 transition-all duration-300 italic"
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
                <FormLabel className="text-blue-700/80 font-medium italic ml-1">
                  {t("contact.form.phone")}
                </FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder={t("contact.form.phone.placeholder")}
                    className="h-14 rounded-2xl border-blue-100 bg-white/50 focus:border-blue-400 focus:ring-4 focus:ring-blue-100/30 text-gray-700 placeholder:text-gray-400 transition-all duration-300 italic"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-blue-700/80 font-medium italic ml-1">
                  {t("contact.form.message")}
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t("contact.form.message.placeholder")}
                    className="min-h-[160px] rounded-[1.5rem] border-blue-100 bg-white/50 focus:border-blue-400 focus:ring-4 focus:ring-blue-100/30 text-gray-700 placeholder:text-gray-400 resize-none transition-all duration-300 p-5 italic"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-4">
            <Button
              type="submit"
              size="lg"
              className={cn(
                "w-full h-16 text-xl font-bold rounded-2xl italic transition-all duration-500",
                "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600",
                "text-white shadow-lg hover:shadow-cyan-200/50 hover:scale-[1.02] active:scale-95 group"
              )}
            >
              <Send className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              {t("contact.form.submit")}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}