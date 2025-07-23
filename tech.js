document.addEventListener('DOMContentLoaded', () => {
 
  const createConnections = () => {
    const techAnimation = document.querySelector('.tech-animation');
    const centralSphere = document.querySelector('.central-sphere');
    const nodes = document.querySelectorAll('.tech-node');
    const connectionsContainer = document.querySelector('.tech-connections');

    connectionsContainer.innerHTML = '';
    
  
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.zIndex = '-1';
    

    const centerRect = centralSphere.getBoundingClientRect();
    const centerX = centerRect.left + centerRect.width/2 - techAnimation.getBoundingClientRect().left;
    const centerY = centerRect.top + centerRect.height/2 - techAnimation.getBoundingClientRect().top;
    
  
    nodes.forEach(node => {
      const nodeRect = node.getBoundingClientRect();
      const nodeX = nodeRect.left + nodeRect.width/2 - techAnimation.getBoundingClientRect().left;
      const nodeY = nodeRect.top + nodeRect.height/2 - techAnimation.getBoundingClientRect().top;
      
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', centerX);
      line.setAttribute('y1', centerY);
      line.setAttribute('x2', nodeX);
      line.setAttribute('y2', nodeY);
      line.setAttribute('stroke', 'rgba(58, 123, 213, 0.3)');
      line.setAttribute('stroke-width', '1');
      line.setAttribute('stroke-dasharray', '5,5');
      
      svg.appendChild(line);
    });
    
    connectionsContainer.appendChild(svg);
  };

  createConnections();
  window.addEventListener('resize', createConnections);
  
 
  document.querySelectorAll('.tech-node').forEach(node => {
    node.addEventListener('mouseenter', () => {
      node.style.transform = node.style.transform + ' scale(1.1)';
      node.style.boxShadow = '0 0 20px rgba(0, 210, 255, 0.5)';
      node.style.zIndex = '10';
    });
    
    node.addEventListener('mouseleave', () => {
      node.style.transform = node.style.transform.replace(' scale(1.1)', '');
      node.style.boxShadow = 'none';
      node.style.zIndex = '';
    });
  });
  

  
  document.querySelectorAll('.case-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const header = card.querySelector('.case-header');
      header.style.transform = 'scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      const header = card.querySelector('.case-header');
      header.style.transform = '';
    });
  });
  

  
  const demoBtn = document.querySelector('.demo-btn');
  if (demoBtn) {
    demoBtn.addEventListener('click', () => {
   
      console.log('Demo requested');
      demoBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
      
   
      setTimeout(() => {
        demoBtn.innerHTML = '<i class="fas fa-check"></i> Request Sent!';
        setTimeout(() => {
          demoBtn.innerHTML = '<span>Request Live Demo</span><i class="fas fa-arrow-right"></i>';
        }, 2000);
      }, 1500);
    });
  }
  

  
  document.querySelectorAll('.tech-card').forEach(card => {
    card.addEventListener('click', (e) => {
   
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;
      
      const techTitle = card.querySelector('h3').textContent;
      console.log(`Selected technology: ${techTitle}`);

    });
  });
  

  
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.tech-card, .case-card, .video-wrapper');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  document.querySelectorAll('.tech-card, .case-card, .video-wrapper').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  

  window.addEventListener('load', animateOnScroll);
  window.addEventListener('scroll', animateOnScroll);
  

  
  const videoWrapper = document.querySelector('.video-wrapper');
  if (videoWrapper) {

    const iframe = videoWrapper.querySelector('iframe');
    iframe.setAttribute('loading', 'lazy');
    
  
    const playButton = document.createElement('div');
    playButton.className = 'video-play-button';
    playButton.innerHTML = '<i class="fas fa-play"></i>';
    videoWrapper.appendChild(playButton);
    
    playButton.addEventListener('click', () => {
      const iframeSrc = iframe.src;
      iframe.src = iframeSrc.includes('autoplay=1') ? 
        iframeSrc.replace('autoplay=1', 'autoplay=0') : 
        iframeSrc.replace('autoplay=0', 'autoplay=1');
      playButton.style.display = 'none';
    });
  }
});