// Aguardar o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Aguardar o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // Variáveis globais
    const header = document.querySelector('.header');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    const heroScrollBtn = document.querySelector('.hero-scroll');
    const bookingForm = document.getElementById('bookingForm');
    const newsletterForm = document.querySelector('.newsletter-form');
    
    // Header transparente no scroll
    function handleScroll() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    }
    
    // Menu mobile
    function toggleMobileMenu() {
        let mobileMenu = document.querySelector('.mobile-menu');
        
        if (!mobileMenu) {
            // Criar menu mobile se não existir
            mobileMenu = document.createElement('div');
            mobileMenu.className = 'mobile-menu';
            mobileMenu.innerHTML = `
                <ul>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#pacotes">Pacotes</a></li>
                    <li><a href="#destinos">Destinos</a></li>
                    <li><a href="#agendamento">Agende sua viagem</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            `;
            document.body.appendChild(mobileMenu);
            
            // Adicionar evento de clique nos links do menu mobile
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });
        }
        
        mobileMenu.classList.toggle('active');
        
        // Alterar ícone do menu
        if (mobileMenu.classList.contains('active')) {
            mobileMenuToggle.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    }
    
    // Scroll suave para seções
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            const offsetTop = element.offsetTop - 80; // Compensar altura do header
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
    
    // Animação de fade-in nos elementos
    function animateOnScroll() {
        const elements = document.querySelectorAll('.package-card, .testimonial-card, .booking-wrapper');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('fade-in', 'visible');
            }
        });
    }
    
    // Validar formulário de agendamento
    function validateBookingForm(formData) {
        const errors = [];
        
        if (!formData.nome.trim()) {
            errors.push('Nome é obrigatório');
        }
        
        if (!formData.destino) {
            errors.push('Destino é obrigatório');
        }
        
        if (!formData.checkin) {
            errors.push('Data de ida é obrigatória');
        }
        
        if (!formData.checkout) {
            errors.push('Data de volta é obrigatória');
        }
        
        if (formData.checkin && formData.checkout) {
            const checkinDate = new Date(formData.checkin);
            const checkoutDate = new Date(formData.checkout);
            const today = new Date();
            
            if (checkinDate < today) {
                errors.push('Data de ida deve ser futura');
            }
            
            if (checkoutDate <= checkinDate) {
                errors.push('Data de volta deve ser posterior à data de ida');
            }
        }
        
        if (!formData.contato.trim()) {
            errors.push('WhatsApp é obrigatório');
        } else {
            const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
            if (!phoneRegex.test(formData.contato)) {
                errors.push('Formato de WhatsApp inválido. Use: (11) 99999-9999');
            }
        }
        
        return errors;
    }
    
    // Formatar telefone
    function formatPhone(input) {
        let value = input.value.replace(/\D/g, '');
        
        if (value.length <= 2) {
            value = value.replace(/(\d{0,2})/, '($1');
        } else if (value.length <= 7) {
            value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
        } else if (value.length <= 11) {
            value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
        } else {
            value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        }
        
        input.value = value;
    }
    
    // Mostrar mensagem de feedback
    function showMessage(message, type = 'success') {
        // Remover mensagem existente
        const existingMessage = document.querySelector('.feedback-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `feedback-message ${type}`;
        messageDiv.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            color: white;
            font-weight: 600;
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
            max-width: 400px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        `;
        
        if (type === 'success') {
            messageDiv.style.background = 'linear-gradient(45deg, #28a745, #34ce57)';
        } else {
            messageDiv.style.background = 'linear-gradient(45deg, #dc3545, #e85d75)';
        }
        
        messageDiv.textContent = message;
        document.body.appendChild(messageDiv);
        
        // Remover após 5 segundos
        setTimeout(() => {
            messageDiv.style.animation = 'slideOut 0.3s ease-in forwards';
            setTimeout(() => messageDiv.remove(), 300);
        }, 5000);
    }
    
    // Adicionar CSS para animações das mensagens
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Event Listeners
    
    // Scroll
    window.addEventListener('scroll', () => {
        handleScroll();
        animateOnScroll();
    });
    
    // Menu mobile
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Scroll suave para links da navegação
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });
    
    // Scroll do hero
    if (heroScrollBtn) {
        heroScrollBtn.addEventListener('click', () => {
            smoothScroll('#pacotes');
        });
    }
    
    // Formatação do campo de telefone
    const phoneInput = document.getElementById('contato');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            formatPhone(this);
        });
    }
    
    // Formulário de agendamento
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                nome: document.getElementById('nome').value,
                destino: document.getElementById('destino').value,
                checkin: document.getElementById('checkin').value,
                checkout: document.getElementById('checkout').value,
                contato: document.getElementById('contato').value
            };
            
            const errors = validateBookingForm(formData);
            
            if (errors.length > 0) {
                showMessage('Erros encontrados: ' + errors.join(', '), 'error');
                return;
            }
            
            // Simular envio do formulário
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showMessage('Solicitação enviada com sucesso! Entraremos em contato em breve.', 'success');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
    
    // Newsletter
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (!email) {
                showMessage('Por favor, insira seu e-mail', 'error');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('Por favor, insira um e-mail válido', 'error');
                return;
            }
            
            const button = this.querySelector('button');
            const originalHtml = button.innerHTML;
            
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            button.disabled = true;
            
            setTimeout(() => {
                showMessage('Inscrito com sucesso! Você receberá nossas ofertas exclusivas.', 'success');
                emailInput.value = '';
                button.innerHTML = originalHtml;
                button.disabled = false;
            }, 1500);
        });
    }
    
    // Efeitos nos cards de pacotes
    const packageCards = document.querySelectorAll('.package-card');
    packageCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Botões "Ver mais" dos pacotes
    const packageBtns = document.querySelectorAll('.package-btn');
    packageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const packageName = this.closest('.package-card').querySelector('h3').textContent;
            showMessage(`Redirecionando para detalhes do pacote: ${packageName}`, 'success');
            
            // Aqui você pode adicionar lógica para redirecionar ou abrir modal
            setTimeout(() => {
                console.log(`Abrir página de detalhes do pacote: ${packageName}`);
            }, 1000);
        });
    });
    
    // Inicializar animações
    animateOnScroll();
    
    // Adicionar classe fade-in aos elementos que devem animar
    document.querySelectorAll('.package-card, .testimonial-card').forEach(element => {
        element.classList.add('fade-in');
    });
    
    // Configurar datas mínimas nos campos de data
    const today = new Date().toISOString().split('T')[0];
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');
    
    if (checkinInput) {
        checkinInput.setAttribute('min', today);
        checkinInput.addEventListener('change', function() {
            if (checkoutInput) {
                checkoutInput.setAttribute('min', this.value);
            }
        });
    }
    
    if (checkoutInput) {
        checkoutInput.setAttribute('min', today);
    }
    
    // Efeito parallax no hero (opcional)
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Fechar menu mobile ao clicar fora
    document.addEventListener('click', function(e) {
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mobileMenu.classList.remove('active');
                mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
    
    // Lazy loading para imagens (opcional)
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src; // Recarregar imagem
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
    
    console.log('Rota dos Sonhos - Site carregado com sucesso! ✈️');
});
