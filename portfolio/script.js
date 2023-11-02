

document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener('click', () => {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('sidebarGo');

  if (sidebar.classList.contains('sidebarGo')) {
    document.querySelector('.ham').style.display = 'inline';
    document.querySelector('.cross').style.display = 'none';
  } else {
    document.querySelector('.ham').style.display = 'none';
    setTimeout(() => {
      document.querySelector('.cross').style.display = 'inline';
    }, 300);
  }
});



let ravi=document.querySelector('.hello');

ravi.addEventListener('click',function(){ ravi.style.background='none';});
ravi.removeEventListener('click',function(){ ravi.style.background='gray';});

// ------------------------------
const nameElement = document.querySelector('.name');
let isDragging = false;
let offsetX, offsetY;

nameElement.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - nameElement.getBoundingClientRect().left;
    offsetY = e.clientY - nameElement.getBoundingClientRect().top;
    nameElement.style.cursor = 'grabbing'; // Change cursor style while dragging.
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;
        nameElement.style.left = `${x}px`;
        nameElement.style.top = `${y}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    nameElement.style.cursor = 'grab';
});
