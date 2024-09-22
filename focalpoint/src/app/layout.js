import localFont from "next/font/local";
import "./globals.css";



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
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
