import { useEffect } from 'react';
import { Icon } from '@iconify/react';
import setupOnScrollAnimations from '../scripts/utils/setupOnScrollAnimations';
import Link from 'next/link';
import {
  NavBar,
  StackCard,
  SkillMeterCard,
  SimpleCard
} from '../components';

export default function Home() {
  useEffect(() => {
    setupOnScrollAnimations();
  }, []);

  return (
    <div className='shadow-xl min-w-[250px]'>
      <main className="enter-animation relative h-screen w-full flex flex-col justify-center items-center px-6 text-white text-center">
        <h1 className="text-2xl sm:text-4xl mb-3 text-orange-3">
          Procurando por um desenvolvedor?
        </h1>
        <h2 className="text-xl sm:text-2xl w-subtopic-clamp">
          Me chamo Caio, sou um <span className="text-blue">programador full stack</span> brasileiro
          e desenvolvo aplicações web usando as tecnologias mais atuais do mercado.
        </h2>
        <a href="mailto:caioreigot@gmail.com?subject=Oi, Caio!" className="hover:cursor-pointer mt-10 border rounded border-orange-3 font-semibold text-xl text-orange-1 py-4 px-6 hover:bg-orange-3 active:brightness-110 transition-all-200 ">
          Me mande um e-mail
        </a>
        <div className="absolute bottom-8 text-base flex flex-col items-center justify-center text-orange-3 hide-when-less-420h">
          <p className="mb-3 select-none">
            Veja mais sobre meu trabalho
          </p>
          <Icon className="bounce-down-animation" icon="line-md:arrow-down-circle" width="24" height="24" />
        </div>
      </main>

      <NavBar />

      <div className="flex flex-col items-center">
        <h2 className="text-center mt-20 mb-1 mx-4 font-semibold text-3xl text-blue">
          UM POUCO SOBRE MIM
        </h2>
        <p className="w-home-clamp text-center text-lg lg:text-xl mt-10">
          Sempre fui uma pessoa curiosa e interessada em aprender. Para mim, a programação se mostrou uma área muito
          gratificante e mágica, onde pude canalizar toda minha hiperatividade, curiosidade e gosto por criação em um
          só lugar. Sou um programador com conhecimento em ambas as áreas do desenvolvimento web, construo interfaces
          interativas do zero e codifico toda a regra de negócio necessária ao lado do servidor para que ideias criem
          vida, sempre prezando pelas boas práticas e mantenabilidade.
        </p>
        <h2 className="text-center mt-20 mb-1 mx-4 font-semibold text-3xl text-blue">
          MEUS CONHECIMENTOS
        </h2>

        <SkillMeterCard meterWidth="w-[95%]" barColor="bg-purple" className="mt-10">
          Front-end
        </SkillMeterCard>
        <SkillMeterCard meterWidth="w-[90%]" barColor="bg-red" className="mt-10">
          Back-end
        </SkillMeterCard>

        <div className="w-home-clamp flex flex-row flex-wrap mt-10">
          <SimpleCard icon="logos:react" className="enter-animation flex-grow m-2 before:bg-blue-react">React</SimpleCard>
          <SimpleCard icon="logos:angular-icon" className="enter-animation lg:delay-100 flex-grow m-2 before:bg-[#fff]">Angular</SimpleCard>
          <SimpleCard icon="vscode-icons:file-type-node" className="enter-animation lg:delay-200 flex-grow m-2 before:bg-green-node">Node</SimpleCard>
          <SimpleCard icon="logos:tailwindcss-icon" className="enter-animation flex-grow m-2 before:bg-blue-tailwind">Tailwind</SimpleCard>
          <SimpleCard icon="logos:typescript-icon" className="enter-animation lg:delay-100 flex-grow m-2 before:bg-[#3684da]">TypeScript</SimpleCard>
          <SimpleCard icon="teenyicons:nextjs-solid" className="enter-animation lg:delay-200 flex-grow m-2 before:bg-[#fff]">Next</SimpleCard>
          <SimpleCard icon="file-icons:php" className="enter-animation flex-grow m-2 before:bg-[#8093cf]" iconColor="#8093cf">PHP</SimpleCard>
          <SimpleCard icon="vscode-icons:file-type-prisma" className="enter-animation lg:delay-100 flex-grow m-2 before:bg-[#e7e7e7]">Prisma</SimpleCard>
          <SimpleCard icon="logos:kotlin-icon" className="enter-animation lg:delay-200 flex-grow m-2 before:bg-[#eb33a8]">Kotlin</SimpleCard>
          <SimpleCard icon="vscode-icons:file-type-sql" className="enter-animation flex-grow m-2 before:bg-[#fff04b]">SQL</SimpleCard>
          <SimpleCard icon="cib:debian" className="enter-animation lg:delay-100 flex-grow m-2 before:bg-[#d70751]" iconColor="#d70751">Linux</SimpleCard>
          <SimpleCard icon="bi:git" className="enter-animation lg:delay-200 flex-grow m-2 before:bg-[#e44c30]" iconColor="#e44c30">Git</SimpleCard>
        </div>
        <h2 className="text-center mt-20 mb-1 mx-4 font-semibold text-3xl text-blue">
          TECNOLOGIAS QUE ESSE SITE UTILIZA
        </h2>
        <StackCard icon="logos:react" title="React" titleColor="text-blue-react" className="mt-10 before:bg-blue-react">
          Criado pela equipe do Facebook e usado por grandes companhias mundo afora,
          o React torna a experiência do usuário com a interface mais eficiente. Esta
          biblioteca front-end simplifica processos complexos e componentiza o layout
          da página, gerando uma maior flexibilidade no código. Eu gosto da organização
          e elegância que os componentes trazem para o desenvolvimento e da forma em que
          isso permite abstrair a lógica da aplicação.
        </StackCard>
        <StackCard icon="teenyicons:nextjs-solid" title="Next.js" titleColor="text-white" className="mt-10 before:bg-white">
          Assim como dito pela Vercel, Next.js é uma tecnologia pronta para produção.
          Com ela, podemos diminuir o trabalho que o navegador teria para ler
          os scripts do React responsáveis por renderizar toda a página. Por conta disso,
          o método de server-side rendering que esta framework utiliza traz uma ótima experiência
          do usuário quando falamos de performance, além de ajudar na visibilidade do site
          ao fornecer as informações necessárias para buscadores como o Google. Next.js é
          uma ótima tecnologia e com certeza continuará revolucionando a forma como
          desenvolvemos sites com React.
        </StackCard>
        <StackCard icon="logos:tailwindcss-icon" title="Tailwind CSS" titleColor="text-blue-tailwind" className="mt-10 before:bg-blue-tailwind">
          Tailwind é um framework front-end desenvolvido para maximizar o potencial do CSS
          e levá-lo ainda mais longe. Use uma vez e se apaixone para sempre. É fácil e produtivo,
          sua build de produção gera o arquivo mais leve possível por remover todos os estilos
          que não foram utilizados, além de oferecer diversas classes utilitárias e ajudar a manter
          o layout responsivo.
        </StackCard>
        <StackCard icon="vscode-icons:file-type-node" title="Node.js" titleColor="text-green-node" className="mt-10 before:bg-green-node">
          Minha tecnologia back-end favorita. Ela permite que eu use a linguagem na qual tenho
          maior domínio, o JavaScript, no lado do servidor, juntamente com o Node Package Manager,
          que conta com o maior repositório de softwares do mundo. Além de ser leve, tem um grande
          potencial para suportar números maiores de conexões simultâneas do que servidores mais
          comuns, sendo indicado para ambientes escaláveis.
        </StackCard>
        <StackCard icon="vscode-icons:file-type-prisma" title="Prisma" titleColor="text-white-prisma" className="mt-10 before:bg-white-prisma">
          Um ORM simplesmente íncrivel. A ideia dos ORMs é a criação de modelos como classes
          em seu código que são convertidos para uma tabela no banco de dados, fornecendo uma
          abstração de alto nível. O Prisma é uma framework back-end que trabalha como uma camada
          de acesso à base de dados, ele resolve muitos dos problemas que tínhamos com os ORMs
          tradicionais, trazendo uma enorme confiabilidade e poder para o desenvolvimento.
        </StackCard>
        <Link href="/posts" className="mt-10 hover:cursor-pointer w-full text-xl text-center font-bold p-4 bg-orange-3 active:bg-orange-2">
          Dê uma olhadinha em minhas postagens
        </Link>
      </div>
    </div>
  );
}