// Dados dos pacotes (mantendo os mesmos dados anteriores)
const packagesData = {
    // EUROPA
    paris: {
        title: "Paris Romântica",
        price: "R$ 3.500",
        duration: "7 dias / 6 noites",
        image: "./img/Paris2.jpg",
        description: "Descubra a cidade luz em uma experiência inesquecível! Paris oferece uma combinação perfeita de história, cultura, gastronomia e romance. Visite os principais pontos turísticos e viva momentos únicos na capital francesa.",
        includes: [
            "Passagem aérea ida e volta",
            "Hospedagem em hotel 4 estrelas no centro",
            "Café da manhã incluído",
            "Transfer aeroporto-hotel-aeroporto",
            "City tour pelos principais pontos turísticos",
            "Ingresso para Torre Eiffel",
            "Passeio de barco pelo Rio Sena",
            "Seguro viagem internacional"
        ],
        itinerary: [
            { day: "Dia 1", activities: "Chegada em Paris, check-in no hotel e passeio pela Champs-Élysées" },
            { day: "Dia 2", activities: "Visita ao Museu do Louvre e Jardins das Tulherias" },
            { day: "Dia 3", activities: "Torre Eiffel, Trocadéro e passeio de barco pelo Sena" },
            { day: "Dia 4", activities: "Montmartre, Sacré-Cœur e Moulin Rouge" },
            { day: "Dia 5", activities: "Versailles - Palácio e Jardins (dia inteiro)" },
            { day: "Dia 6", activities: "Quartier Latin, Notre-Dame e compras" },
            { day: "Dia 7", activities: "Check-out e transfer para o aeroporto" }
        ],
        info: [
            "Documentação: Passaporte com validade mínima de 6 meses",
            "Vacinas: Não são obrigatórias",
            "Moeda: Euro (EUR)",
            "Fuso horário: +4 horas em relação ao Brasil",
            "Idioma: Francês (inglês é amplamente falado)",
            "Melhor época: Abril a outubro"
        ]
    },

    roma: {
        title: "Roma Histórica",
        price: "R$ 3.200",
        duration: "6 dias / 5 noites",
        image: "./img/Roma2.jpg",
        description: "Mergulhe na história milenar da Cidade Eterna! Roma oferece uma jornada única através de séculos de arte, arquitetura e cultura. Explore o Coliseu, Vaticano e saboreie a autêntica culinária italiana.",
        includes: [
            "Passagem aérea ida e volta",
            "Hospedagem em hotel boutique no centro histórico",
            "Café da manhã italiano incluído",
            "Transfer aeroporto-hotel-aeroporto",
            "Guia local especializado",
            "Ingresso para Coliseu e Fórum Romano",
            "Visita aos Museus Vaticanos",
            "Seguro viagem internacional"
        ],
        itinerary: [
            { day: "Dia 1", activities: "Chegada em Roma, check-in e passeio pela Piazza Navona" },
            { day: "Dia 2", activities: "Coliseu, Fórum Romano e Monte Palatino" },
            { day: "Dia 3", activities: "Vaticano: Museus, Capela Sistina e Basílica de São Pedro" },
            { day: "Dia 4", activities: "Fontana di Trevi, Panteão e Spanish Steps" },
            { day: "Dia 5", activities: "Tivoli: Villa d'Este e Villa Adriana" },
            { day: "Dia 6", activities: "Trastevere, compras e transfer para o aeroporto" }
        ],
        info: [
            "Documentação: Passaporte com validade mínima de 6 meses",
            "Moeda: Euro (EUR)",
            "Fuso horário: +4 horas em relação ao Brasil",
            "Idioma: Italiano (inglês falado em áreas turísticas)",
            "Melhor época: Abril a junho e setembro a outubro"
        ]
    },

    londres: {
        title: "Londres Imperial",
        price: "R$ 4.000",
        duration: "8 dias / 7 noites",
        image: "./img/Londres1.jpg",
        description: "Explore a majestosa capital britânica! Londres combina tradição real com modernidade vibrante. Descubra palácios, museus mundialmente famosos e a cultura única dos pubs ingleses.",
        includes: [
            "Passagem aérea ida e volta",
            "Hospedagem em hotel tradicional inglês",
            "Café da manhã inglês completo",
            "Transfer aeroporto-hotel-aeroporto",
            "Oyster Card para transporte público",
            "Ingresso para Torre de Londres",
            "Passeio de barco pelo Tâmisa",
            "Seguro viagem internacional"
        ],
        itinerary: [
            { day: "Dia 1", activities: "Chegada em Londres, check-in e passeio por Covent Garden" },
            { day: "Dia 2", activities: "Palácio de Buckingham, Westminster e Big Ben" },
            { day: "Dia 3", activities: "Torre de Londres, Tower Bridge e Borough Market" },
            { day: "Dia 4", activities: "British Museum e Oxford Street" },
            { day: "Dia 5", activities: "Windsor Castle (dia inteiro)" },
            { day: "Dia 6", activities: "Camden Market, Regent's Park e Primrose Hill" },
            { day: "Dia 7", activities: "Tate Modern, Shakespeare's Globe e London Eye" },
            { day: "Dia 8", activities: "Compras em Harrods e transfer para o aeroporto" }
        ],
        info: [
            "Documentação: Passaporte com validade mínima de 6 meses",
            "Moeda: Libra Esterlina (GBP)",
            "Fuso horário: +4 horas em relação ao Brasil",
            "Idioma: Inglês",
            "Melhor época: Maio a setembro"
        ]
    },

    // ÁSIA
    tokyo: {
        title: "Tokyo Moderna",
        price: "R$ 4.200",
        duration: "10 dias / 9 noites",
        image: "./img/Tokyo2.jpg",
        description: "Mergulhe na fascinante cultura japonesa! Tokyo é uma metrópole vibrante que combina tradição milenar com tecnologia de ponta. Experimente a culinária única, visite templos históricos e descubra a hospitalidade japonesa.",
        includes: [
            "Passagem aérea ida e volta",
            "Hospedagem em hotel tradicional japonês",
            "Café da manhã japonês incluído",
            "JR Pass (transporte ilimitado)",
            "Transfer aeroporto-hotel-aeroporto",
            "Guia local especializado",
            "Experiência em casa de chá tradicional",
            "Seguro viagem internacional"
        ],
        itinerary: [
            { day: "Dia 1", activities: "Chegada em Tokyo, check-in e exploração do bairro Shibuya" },
            { day: "Dia 2", activities: "Templo Senso-ji, bairro Asakusa e Tokyo Skytree" },
            { day: "Dia 3", activities: "Palácio Imperial, Ginza e mercado de peixes Tsukiji" },
            { day: "Dia 4", activities: "Harajuku, Omotesando e Santuário Meiji" },
            { day: "Dia 5", activities: "Excursão para Nikko - Templos e natureza" },
            { day: "Dia 6", activities: "Akihabara, Ueno e Museu Nacional" },
            { day: "Dia 7", activities: "Excursão para Kamakura - Grande Buda" },
            { day: "Dia 8", activities: "Roppongi, Tokyo Tower e experiência culinária" },
            { day: "Dia 9", activities: "Compras em Shinjuku e cerimônia do chá" },
            { day: "Dia 10", activities: "Check-out e transfer para o aeroporto" }
        ],
        info: [
            "Documentação: Passaporte com validade mínima de 6 meses",
            "Visto: Não é necessário para brasileiros (até 90 dias)",
            "Moeda: Iene japonês (JPY)",
            "Fuso horário: +12 horas em relação ao Brasil",
            "Idioma: Japonês (inglês básico em áreas turísticas)",
            "Melhor época: Março a maio e setembro a novembro"
        ]
    },

    bali: {
        title: "Bali Paradisíaca",
        price: "R$ 2.800",
        duration: "8 dias / 7 noites",
        image: "./img/Bali1.jpg",
        description: "Relaxe no paraíso tropical de Bali! Conhecida como a 'Ilha dos Deuses', Bali oferece praias paradisíacas, templos sagrados, paisagens de tirar o fôlego e uma cultura rica e acolhedora.",
        includes: [
            "Passagem aérea ida e volta",
            "Hospedagem em resort à beira-mar",
            "Café da manhã e jantar incluídos",
            "Transfer aeroporto-hotel-aeroporto",
            "Passeio aos terraços de arroz",
            "Visita a templos tradicionais",
            "Aula de culinária balinesa",
            "Massagem tradicional balinesa",
            "Seguro viagem internacional"
        ],
        itinerary: [
            { day: "Dia 1", activities: "Chegada em Bali, check-in no resort e relaxamento na praia" },
            { day: "Dia 2", activities: "Ubud - Terraços de arroz e Monkey Forest Sanctuary" },
            { day: "Dia 3", activities: "Templos Tanah Lot e Uluwatu com dança Kecak" },
            { day: "Dia 4", activities: "Vulcão Batur - Nascer do sol e águas termais" },
            { day: "Dia 5", activities: "Aula de culinária e visita ao mercado tradicional" },
            { day: "Dia 6", activities: "Dia livre na praia com atividades aquáticas" },
            { day: "Dia 7", activities: "Spa day com massagem tradicional e compras" },
            { day: "Dia 8", activities: "Check-out e transfer para o aeroporto" }
        ],
        info: [
            "Documentação: Passaporte com validade mínima de 6 meses",
            "Visto: Visto na chegada (35 USD)",
            "Moeda: Rupia indonésia (IDR)",
            "Fuso horário: +11 horas em relação ao Brasil",
            "Idioma: Indonésio e balinês (inglês amplamente falado)",
            "Melhor época: Abril a outubro (estação seca)"
        ]
    },

    tailandia: {
        title: "Tailândia Exótica",
        price: "R$ 3.100",
        duration: "9 dias / 8 noites",
        image: "./img/Tailandia1.jpg",
        description: "Descubra a Terra do Sorriso! A Tailândia oferece uma mistura única de templos dourados, praias paradisíacas, culinária exótica e uma cultura calorosa que encanta visitantes do mundo todo.",
        includes: [
            "Passagem aérea ida e volta",
            "Hospedagem em hotéis selecionados",
            "Café da manhã incluído",
            "Transfer aeroporto-hotel-aeroporto",
            "Passeio de barco pelas ilhas",
            "Visita a templos budistas",
            "Aula de culinária tailandesa",
            "Massagem tradicional tailandesa",
            "Seguro viagem internacional"
        ],
        itinerary: [
            { day: "Dia 1", activities: "Chegada em Bangkok, check-in e mercado flutuante" },
            { day: "Dia 2", activities: "Grande Palácio, Wat Pho e passeio de barco pelos canais" },
            { day: "Dia 3", activities: "Voo para Phuket, check-in na praia e relaxamento" },
            { day: "Dia 4", activities: "Ilhas Phi Phi - passeio de barco e snorkeling" },
            { day: "Dia 5", activities: "James Bond Island e canoagem em Phang Nga" },
            { day: "Dia 6", activities: "Aula de culinária e massagem tradicional" },
            { day: "Dia 7", activities: "Voo para Chiang Mai, templos e mercado noturno" },
            { day: "Dia 8", activities: "Santuário de elefantes e tribo das montanhas" },
            { day: "Dia 9", activities: "Compras e transfer para o aeroporto" }
        ],
        info: [
            "Documentação: Passaporte com validade mínima de 6 meses",
            "Visto: Não é necessário para brasileiros (até 30 dias)",
            "Moeda: Baht tailandês (THB)",
            "Fuso horário: +10 horas em relação ao Brasil",
            "Idioma: Tailandês (inglês falado em áreas turísticas)",
            "Melhor época: Novembro a março"
        ]
    },

    // AMÉRICA
    novayork: {
        title: "Nova York Vibrante",
        price: "R$ 3.800",
        duration: "7 dias / 6 noites",
        image: "./img/NY1.jpg",
        description: "Viva a energia da cidade que nunca dorme! Nova York oferece uma experiência urbana incomparável com seus arranha-céus icônicos, Broadway, museus de classe mundial e a diversidade cultural única.",
        includes: [
            "Passagem aérea ida e volta",
            "Hospedagem em hotel em Manhattan",
            "Café da manhã americano",
            "Transfer aeroporto-hotel-aeroporto",
            "MetroCard para transporte público",
            "Ingresso para Empire State Building",
            "Show da Broadway",
            "Seguro viagem internacional"
        ],
        itinerary: [
            { day: "Dia 1", activities: "Chegada em NYC, check-in e Times Square" },
            { day: "Dia 2", activities: "Estátua da Liberdade, Ellis Island e Wall Street" },
            { day: "Dia 3", activities: "Central Park, Metropolitan Museum e 5th Avenue" },
            { day: "Dia 4", activities: "Brooklyn Bridge, DUMBO e Empire State Building" },
            { day: "Dia 5", activities: "High Line, Chelsea Market e show da Broadway" },
            { day: "Dia 6", activities: "9/11 Memorial, SoHo e compras" },
            { day: "Dia 7", activities: "Check-out e transfer para o aeroporto" }
        ],
        info: [
            "Documentação: Passaporte e ESTA (autorização eletrônica)",
            "Moeda: Dólar americano (USD)",
            "Fuso horário: +2 horas em relação ao Brasil",
            "Idioma: Inglês",
            "Melhor época: Abril a junho e setembro a novembro"
        ]
    },

    buenosaires: {
        title: "Buenos Aires Tango",
        price: "R$ 2.200",
        duration: "5 dias / 4 noites",
        image: "./img/Buenos1.jpg",
        description: "Sinta a paixão portenha! Buenos Aires é uma cidade elegante e cosmopolita, famosa pelo tango, arquitetura europeia, gastronomia excepcional e vida noturna vibrante.",
        includes: [
            "Passagem aérea ida e volta",
            "Hospedagem em hotel boutique",
            "Café da manhã incluído",
            "Transfer aeroporto-hotel-aeroporto",
            "City tour pelos principais bairros",
            "Show de tango com jantar",
            "Aula de tango",
            "Seguro viagem internacional"
        ],
        itinerary: [
            { day: "Dia 1", activities: "Chegada em Buenos Aires, check-in e Puerto Madero" },
            { day: "Dia 2", activities: "San Telmo, La Boca e show de tango" },
            { day: "Dia 3", activities: "Recoleta, Palermo e aula de tango" },
            { day: "Dia 4", activities: "Tigre Delta e compras em Palermo" },
            { day: "Dia 5", activities: "Centro histórico e transfer para o aeroporto" }
        ],
        info: [
            "Documentação: RG ou passaporte",
            "Moeda: Peso argentino (ARS)",
            "Fuso horário: Mesmo horário do Brasil",
            "Idioma: Espanhol",
            "Melhor época: Março a maio e setembro a novembro"
        ]
    },

    cancun: {
        title: "Cancún Caribenho",
        price: "R$ 2.900",
        duration: "7 dias / 6 noites",
        image: "./img/Cancun1.jpg",
        description: "Desfrute do paraíso caribenho! Cancún oferece praias de areia branca, mar turquesa, sítios arqueológicos maias e uma vida noturna animada, tudo em um resort all-inclusive.",
        includes: [
            "Passagem aérea ida e volta",
            "Hospedagem all-inclusive em resort",
            "Todas as refeições e bebidas incluídas",
            "Transfer aeroporto-hotel-aeroporto",
            "Passeio a Chichen Itza",
            "Snorkeling em cenotes",
            "Atividades aquáticas no resort",
            "Seguro viagem internacional"
        ],
        itinerary: [
            { day: "Dia 1", activities: "Chegada em Cancún, check-in no resort e praia" },
            { day: "Dia 2", activities: "Chichen Itza - Maravilha do Mundo Moderno" },
            { day: "Dia 3", activities: "Isla Mujeres - passeio de barco e snorkeling" },
            { day: "Dia 4", activities: "Cenotes - mergulho em águas cristalinas" },
            { day: "Dia 5", activities: "Xcaret - parque eco-arqueológico" },
            { day: "Dia 6", activities: "Dia livre no resort e vida noturna" },
            { day: "Dia 7", activities: "Check-out e transfer para o aeroporto" }
        ],
        info: [
            "Documentação: Passaporte com validade mínima de 6 meses",
            "Moeda: Peso mexicano (MXN) e dólar americano",
            "Fuso horário: +1 hora em relação ao Brasil",
            "Idioma: Espanhol (inglês falado em resorts)",
            "Melhor época: Dezembro a abril"
        ]
    },

    // BRASIL
    noronha: {
        title: "Fernando de Noronha",
        price: "R$ 1.800",
        duration: "5 dias / 4 noites",
        image: "./img/Noronha.jpg",
        description: "Descubra o paraíso brasileiro! Fernando de Noronha é um santuário ecológico com praias paradisíacas, vida marinha exuberante e paisagens de tirar o fôlego.",
        includes: [
            "Passagem aérea ida e volta",
            "Hospedagem em pousada charmosa",
            "Café da manhã incluído",
            "Transfer aeroporto-pousada-aeroporto",
            "Taxa de preservação ambiental",
            "Passeio de barco",
            "Mergulho com cilindro",
            "Seguro viagem nacional"
        ],
        itinerary: [
            { day: "Dia 1", activities: "Chegada em Noronha, check-in e Praia do Cachorro" },
            { day: "Dia 2", activities: "Baía do Sancho e Mirante dos Dois Irmãos" },
            { day: "Dia 3", activities: "Mergulho com cilindro e Praia do Leão" },
            { day: "Dia 4", activities: "Passeio de barco e Projeto Tamar" },
            { day: "Dia 5", activities: "Praia da Conceição e transfer para o aeroporto" }
        ],
        info: [
            "Documentação: RG ou CNH com foto",
            "Taxa de preservação: R$ 73,52 por dia",
            "Melhor época: Setembro a março",
            "Limite de visitantes por dia",
            "Proibido usar protetor solar químico"
        ]
    },

    amazonia: {
        title: "Amazônia Selvagem",
        price: "R$ 1.500",
        duration: "6 dias / 5 noites",
        image: "./img/Amazonia.jpg",
        description: "Aventure-se na maior floresta tropical do mundo! A Amazônia oferece uma experiência única de contato com a natureza, fauna exótica e culturas tradicionais.",
        includes: [
            "Passagem aérea ida e volta",
            "Hospedagem em lodge na floresta",
            "Todas as refeições incluídas",
            "Transfer aeroporto-lodge-aeroporto",
            "Guia especializado",
            "Passeios de canoa",
            "Caminhadas na floresta",
            "Seguro viagem nacional"
        ],
        itinerary: [
            { day: "Dia 1", activities: "Chegada em Manaus, transfer para o lodge" },
            { day: "Dia 2", activities: "Encontro das águas e passeio de canoa" },
            { day: "Dia 3", activities: "Caminhada na floresta e observação de animais" },
            { day: "Dia 4", activities: "Visita a comunidade ribeirinha" },
            { day: "Dia 5", activities: "Pesca de piranha e observação de botos" },
            { day: "Dia 6", activities: "Transfer para Manaus e voo de volta" }
        ],
        info: [
            "Documentação: RG ou CNH com foto",
            "Vacina contra febre amarela obrigatória",
            "Repelente e roupas adequadas necessários",
            "Melhor época: Junho a novembro (seca)",
            "Levar medicamentos pessoais"
        ]
    },

    rio: {
        title: "Rio de Janeiro",
        price: "R$ 1.200",
        duration: "4 dias / 3 noites",
        image: "./img/RJ1.jpg",
        description: "Viva a Cidade Maravilhosa! O Rio de Janeiro encanta com suas praias famosas, Cristo Redentor, Pão de Açúcar e a alegria contagiante do povo carioca.",
        includes: [
            "Passagem aérea ida e volta",
            "Hospedagem em hotel em Copacabana",
            "Café da manhã incluído",
            "Transfer aeroporto-hotel-aeroporto",
            "City tour pelos principais pontos",
            "Ingresso para Cristo Redentor",
            "Passeio de bondinho no Pão de Açúcar",
            "Seguro viagem nacional"
        ],
        itinerary: [
            { day: "Dia 1", activities: "Chegada no Rio, check-in e Copacabana" },
            { day: "Dia 2", activities: "Cristo Redentor, Santa Teresa e Lapa" },
            { day: "Dia 3", activities: "Pão de Açúcar, Ipanema e Lagoa" },
            { day: "Dia 4", activities: "Centro histórico e transfer para o aeroporto" }
        ],
        info: [
            "Documentação: RG ou CNH com foto",
            "Melhor época: Maio a setembro",
            "Cuidados com pertences pessoais",
            "Protetor solar obrigatório",
            "Aproveite a gastronomia local"
        ]
    }
};

// Elementos do DOM
const modal = document.getElementById('packageModal');
const closeBtn = document.querySelector('.close');
const verMaisBtns = document.querySelectorAll('.btn-ver-mais');
const filterBtns = document.querySelectorAll('.filter-btn');
const packageCards = document.querySelectorAll('.package-card');

// Elementos do modal
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalDuration = document.getElementById('modalDuration');
const modalDescription = document.getElementById('modalDescription');
const modalIncludes = document.getElementById('modalIncludes');
const modalItinerary = document.getElementById('modalItinerary');
const modalInfo = document.getElementById('modalInfo');

// Função para filtrar pacotes por continente
function filterPackages(continent) {
    packageCards.forEach(card => {
        if (continent === 'all' || card.getAttribute('data-continent') === continent) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Função para abrir o modal
function openModal(packageKey) {
    const packageData = packagesData[packageKey];
    
    if (!packageData) return;
    
    // Preencher dados básicos
    modalImage.src = packageData.image;
    modalImage.alt = packageData.title;
    modalTitle.textContent = packageData.title;
    modalPrice.textContent = packageData.price;
    modalDuration.textContent = packageData.duration;
    modalDescription.textContent = packageData.description;
    
    // Preencher o que está incluído
    modalIncludes.innerHTML = '';
    packageData.includes.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        modalIncludes.appendChild(li);
    });
    
    // Preencher itinerário
    modalItinerary.innerHTML = '';
    packageData.itinerary.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'itinerary-day';
        dayDiv.innerHTML = `
            <h4>${day.day}</h4>
            <p>${day.activities}</p>
        `;
        modalItinerary.appendChild(dayDiv);
    });
    
    // Preencher informações importantes
    modalInfo.innerHTML = '';
    packageData.info.forEach(info => {
        const li = document.createElement('li');
        li.textContent = info;
        modalInfo.appendChild(li);
    });
    
    // Mostrar modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Função para fechar o modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners para filtros
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Remove active de todos os botões
        filterBtns.forEach(b => b.classList.remove('active'));
        // Adiciona active ao botão clicado
        e.target.classList.add('active');
        
        // Filtra os pacotes
        const continent = e.target.getAttribute('data-continent');
        filterPackages(continent);
    });
});

// Event listeners para botões "Ver mais"
verMaisBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const packageKey = e.target.getAttribute('data-package');
        openModal(packageKey);
    });
});

closeBtn.addEventListener('click', closeModal);

// Fechar modal clicando fora dele
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Event listeners para os botões do modal
document.querySelector('.btn-reserve').addEventListener('click', () => {
    alert('Redirecionando para a página de reservas...');
    // Aqui você pode adicionar a lógica para redirecionar para a página de reservas
});

document.querySelector('.btn-contact').addEventListener('click', () => {
    alert('Redirecionando para o WhatsApp...');
    // Aqui você pode adicionar a lógica para abrir o WhatsApp
    // window.open('https://wa.me/5511999999999', '_blank');
});