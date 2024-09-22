import { Inter_Tight } from "next/font/google";
import "./globals.css";

// Carrega a fonte Inter Tight
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Adicione os pesos desejados
});

export const metadata = {
  title: "FocalPoint",
  description:
    "Gerenciador de Tarefas - Uma aplicação intuitiva para organizar suas atividades diárias com facilidade. Adicione, conclua e gerencie suas tarefas em um ambiente responsivo e amigável. Aumente sua produtividade e mantenha o controle das suas obrigações!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="./images/shape.png" />
      </head>
      <body className={interTight.className}>
        {children}
      </body>
    </html>
  );
}
