document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const projectGrid = document.getElementById('projectGrid');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const closeModal = document.getElementById('closeModal');

    // Helper function to create icon element
    function createIconHTML(name) {
        const iconMap = {
            calculator: 'fa-calculator',
            dumbbell: 'fa-dumbbell',
            cloud: 'fa-cloud',
            palette: 'fa-palette',
            heart: 'fa-heart',
            'external-link': 'fa-external-link-alt',
            'arrow-right': 'fa-arrow-right',
            code: 'fa-code'
        };
        
        return `<i class="fas ${iconMap[name]}"></i>`;
    }

    function renderProjectCards(projectList) {
        return projectList.map(project => `
            <div class="project-card">
                <div class="project-content">
                    <div class="project-header">
                        <div class="icon-container">
                            ${createIconHTML(project.icon)}
                        </div>
                        <a href="https://${project.liveUrl}" 
                           class="live-demo" 
                           target="_blank" 
                           rel="noopener noreferrer">
                            Live Demo
                            ${createIconHTML('external-link')}
                        </a>
                    </div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-summary">${project.summary}</p>
                    <div class="tags">
                        ${project.tags.map(tag => `
                            <span class="tag">${tag}</span>
                        `).join('')}
                    </div>
                    <button class="details-button" data-project-id="${project.id}">
                        View Technical Details 
                        ${createIconHTML('arrow-right')}
                    </button>
                </div>
            </div>
        `).join('');
    }

    function renderProjects() {
        const toolsProjects = projects.filter(p => p.category === 'tools');
        const websiteProjects = projects.filter(p => p.category === 'websites');

        projectGrid.innerHTML = `
            <div class="projects-container">
                <div class="category-section">
                    <h2 class="category-title">Interactive Tools</h2>
                    ${renderProjectCards(toolsProjects)}
                </div>
                
                <div class="category-section">
                    <h2 class="category-title">Websites</h2>
                    ${renderProjectCards(websiteProjects)}
                </div>
            </div>
        `;
    }

    function renderCaseStudy(project) {
        modalTitle.textContent = project.title;
        modal.querySelector('.modal-body').innerHTML = `
            <div class="modal-content-wrapper">
                <section class="modal-section">
                    <h3 class="section-title">The Challenge</h3>
                    <p class="section-text">${project.caseStudy.challenge}</p>
                </section>
    
                <section class="modal-section">
                    <h3 class="section-title">Key Features</h3>
                    <ul class="feature-list">
                        ${project.caseStudy.features.map(feature => `
                            <li class="feature-item">${feature}</li>
                        `).join('')}
                    </ul>
                </section>
    
                <section class="modal-section">
                    <h3 class="section-title">Technical Highlights</h3>
                    <ul class="feature-list">
                        ${project.caseStudy.code_highlights.map(highlight => `
                            <li class="feature-item">${highlight}</li>
                        `).join('')}
                    </ul>
                </section>
    
                <section class="modal-section">
                    <h3 class="section-title">Technologies Used</h3>
                    <div class="tags">
                        ${project.caseStudy.tech.map(tech => `
                            <span class="tag">${tech}</span>
                        `).join('')}
                    </div>
                </section>
    
                <section class="modal-section">
                    <h3 class="section-title">Impact</h3>
                    <p class="section-text">${project.caseStudy.impact}</p>
                </section>
            </div>
        `;
    }

    // Event Listeners
    projectGrid.addEventListener('click', (e) => {
        const detailsButton = e.target.closest('.details-button');
        if (detailsButton) {
            const projectId = parseInt(detailsButton.dataset.projectId);
            const project = projects.find(p => p.id === projectId);
            if (project) {
                renderCaseStudy(project);
                modal.classList.remove('hidden');
            }
        }
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const isLeft = card.closest('.category-section').querySelector('.category-title').textContent.includes('Interactive');
                card.classList.add(isLeft ? 'animate-left' : 'animate-right');
                observer.unobserve(card); // Only animate once
            }
        });
    }, observerOptions);

    // Function to start observing cards
    function observeCards() {
        document.querySelectorAll('.project-card').forEach(card => {
            observer.observe(card);
        });
    }

    // Update the renderProjects function to initialize observers after rendering
    const originalRenderProjects = renderProjects;
    renderProjects = function() {
        originalRenderProjects();
        observeCards();
    };

    // Initial render and observation
    renderProjects();
    observeCards();
});