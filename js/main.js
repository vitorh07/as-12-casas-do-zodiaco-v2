function descobrirCDZ(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const data = document.querySelector('#data').value;
    const div = document.querySelector(".cdz");

    if(data <= '05/21' && data >= '06/20'){
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src","img/gemeos.jpg");
        imagem.setAttribute("width","300px");
        div.innerHTML = "Saga de Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena. O cavaleiro de gêmeos possuía um irmão gêmeo chamado Kanon, que propôs que eles matassem Athena e comandassem o mundo."
    }

    else if(data >= '10/23' && data <= '11/21'){
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src","img/escorpiao.jpg");
        imagem.setAttribute("width","300px");
        div.innerHTML = "Milo de Escorpião é o cavaleiro que protege a Casa de Escorpião no Santuário de Atena na Grécia. De personalidade por vezes altiva, porem nobre e justo.";
    }
    else if(data >= '02/19' && data <= '03/20'){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","img/peixes.jpg");
        imagem.setAttribute("width","300px");
        div.innerHTML = "Afrodite de Peixes é o Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XX. Usa variações de golpes com rosas, como o Rosas Diabólicas Reais. Sua ideia é de que só um poder supremo pode manter a paz e ordem no mundo, mesmo que esse poder provenha do mal. Por isso, mesmo tendo consciência de que o Grande Mestre servia ao mal, acabou obedecendo suas ordens e matando Daidalos, mestre de Shun. Sua atitude pode não ser a mais exemplar para um Cavaleiro, mas seu propósito de manter a paz na Terra é igual ao de qualquer Cavaleiro.";
    }
    else if(data >= '01/21' && data <= '02/18'){
        texto.innerHTML = "Aquário";
        imagem.setAttribute("src","img/aquario.jpg");
        imagem.setAttribute("width","300px");
        div.innerHTML = "Camus de Aquário é o Cavaleiro de Ouro que protege a Casa de Aquário no Santuário. No mangá, treinou o pequeno Hyoga e Isaak durante seis anos nas geladas terras do leste da Sibéria. foi obrigado a lutar contra Hyoga no Santuário.";
    }
    else if(data >= '06/21' && data <= '07/22'){
        texto.innerHTML = "Câncer";
        imagem.setAttribute("src","img/cancer.jpg");
        imagem.setAttribute("width","300px");
        div.innerHTML = "Máscara da Morte de Câncer é o Cavaleiro de Ouro de Câncer e protetor da quarta Casa do Zodíaco do século XX. Adora lutas, matança e acredita que, para um objetivo maior, alguns sacrifícios são inevitáveis. As paredes da Casa de Câncer são enfeitadas com os rostos das pessoas que foram mortas até hoje por Máscara da Morte.";
    }
    else if(data >= '12/22' && data <= '12/31' || data <= '01/20' && data >= '01/01'){
        texto.innerHTML = "Capricórnio";
        imagem.setAttribute("src","img/capricornio.jpg");
        imagem.setAttribute("width","300px");
        div.innerHTML = "Shura de Capricórnio é o Cavaleiro de Ouro que protege a Casa de Capricórnio. Shura se considera o cavaleiro mais fiel a Atena, porém sua excessiva lealdade ao Santuário acabou levando-o a cometer uma série de equívocos. Seu golpe principal é Excalibur, no qual concentra seu cosmo numa rajada cortante de energia, como uma espada. Este golpe tem uma intensidade concentrada fortíssima, e sai na velocidade da luz.";
    }
    else if(data >= '07/23' && data <= '08/22'){
        texto.innerHTML = "Leão";
        imagem.setAttribute("src","img/leao.jpg");
        imagem.setAttribute("width","300px");
        div.innerHTML = "Irmão de Aiolos. Apesar de sua personalidade explosiva, tem um coração puro que distingue rapidamente os justos, por isso foi um dos primeiros Cavaleiros de Ouro a reconhecer a autoridade de Atena. Como seu irmão Aiolos foi condenado como traidor, ele tenta limpar o nome da família jurando fidelidade ao Grande Mestre, até participando voluntariamente do extermínio dos Cavaleiros de Bronze. Durante a batalha contra os Espectros, enfrentou o exército inimigo de frente e derrubou muitos Espectros, servindo como poder central de ataque no Santuário.";
    }
    else if(data >= '09/23' && data <= '10/22'){
        texto.innerHTML = "Libra";
        imagem.setAttribute("src","img/libra.jpg");
        imagem.setAttribute("width","300px");
        div.innerHTML = "O aparentemente inofensivo Mestre Ancião nada mais é do que Dohko, o cavaleiro de Libra. Absurdamente poderoso e responsável, o mentor de Shiryu encantou os fãs tanto na forma como o conhecemos, já velhinho e supostamente frágil, quanto atuando no campo de batalha durante a saga de Hades.";
    }
    else if(data >= '11/22' && data <= '12/21'){
        texto.innerHTML = "Sagitário";
        imagem.setAttribute("src","img/sagitario.jpg");
        imagem.setAttribute("width","300px");
        div.innerHTML = "Aiolos de Sagitário é a encarnação de dois conceitos fundamentais para a história de Cavaleiros do Zodíaco: lealdade e determinação. Mesmo gravemente ferido, o Cavaleiro de Sagitário se esforça ao máximo para salvar a bebê Atena do Mestre do Santuário, sendo atacado por muitos de seus colegas no processo.";
    }
    else if(data >= '04/21' && data <= '05/20'){
        texto.innerHTML = "Touro";
        imagem.setAttribute("src","img/touro.jpg");
        imagem.setAttribute("width","300px");
        div.innerHTML = "Aldebaran é o Cavaleiro de Ouro da Constelação de Touro durante os eventos do Século XX, servindo como o guardião da Casa de Touro no Santuário. Dotado de uma resistência fora do comum, também tem uma grande força física e uma agilidade impressionante para alguém de seu porte.";
    }
    else if(data >= '08/23' && data <= '09/22'){
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src","img/virgem.jpg");
        imagem.setAttribute("width","300px");
        div.innerHTML = "Cavaleiro de Ouro do signo de Virgem. Natural da Índia. É o mais sensato entre os Cavaleiros de Ouro. Não se abala com qualquer coisa e avalia tudo com muita calma. Não é cego mas mantem os olhos fechados e se priva da visão para elevar seu cosmo ao extremo. No momento que os olhos se abrem, bloqueia os cinco sentidos do oponente, até mesmo o sexto sentido, e desfere o golpe de defesa e ataque Tesouro do Céu.";
    }
    else if(data >= '03/21' && data <= '04/20'){
        texto.innerHTML = "Áries";
        imagem.setAttribute("src","img/aries.jpg");
        imagem.setAttribute("width","300px");
        div.innerHTML = "Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco. Como desde cedo desconfiava do Grande Mestre, deu as costas ao Santuário.";
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
        div.innerHTML = ""
    }
}
