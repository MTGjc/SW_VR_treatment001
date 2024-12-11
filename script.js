document.getElementById('toggleButton1').addEventListener('click', function(){
    const content = document.getElementById('expandableContent1');
    content.classList.toggle('expanded');
    this.textContent = content.classList.contains('expanded') ? 'Act 1 | The Forgotten Lines and the Memory Bet' : 'Act 1 | The Forgotten Lines and the Memory Bet';
  }
);

document.getElementById('toggleButton3').addEventListener('click', function(){
    const content = document.getElementById('expandableContent3');
    content.classList.toggle('expanded');
    this.textContent = content.classList.contains('expanded') ? 'Act 3 | Shattered Memories like Ghost in the Pavilion' : 'Act 3 | Shattered Memories like Ghost in the Pavilion';
  }
);

document.getElementById('toggleButton4').addEventListener('click', function(){
    const content = document.getElementById('expandableContent4');
    content.classList.toggle('expanded');
    this.textContent = content.classList.contains('expanded') ? 'Act 4 | Chun’s Complete Amnesia' : 'Act 4 | Chun’s Complete Amnesia';
  }
);

document.getElementById('toggleButton5').addEventListener('click', function(){
    const content = document.getElementById('expandableContent5');
    content.classList.toggle('expanded');
    this.textContent = content.classList.contains('expanded') ? 'Act 5 | Return to the Stage' : 'Act 5 | Return to the Stage';
  }
);






document.getElementById('toggleBtn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior

  const block2 = document.getElementById('block2');

  // Toggle Act 1 and Act 2 visibility
  if (block2.classList.contains('visible')) {
      // Collapse Act 2
      block2.classList.remove('visible');
      block2.classList.add('hidden');
      
      // Wait for the collapse to finish (after 500ms)
      setTimeout(() => {
          block2.style.display = 'none'; // Hide Block 2 completely after collapse
      }, 500); // Wait for 0.5s for the collapse animation
      // block2.style.display = 'block'; // Make Block 2 visible before animating
      // setTimeout(() => {
      //     block2.classList.remove('hidden');
      //     block2.classList.add('visible');
          
      //     // Smoothly scroll to Block 2
      //     block2.scrollIntoView({ behavior: 'smooth' });
      // }, 50); 

  } else {
      // Expand Act 2
      block2.style.display = 'block'; // Make Block 2 visible before animating
      setTimeout(() => {
          block2.classList.remove('hidden');
          block2.classList.add('visible');
          
          // Smoothly scroll to Block 2
          block2.scrollIntoView({ behavior: 'smooth' });
      }, 50); // Slight delay before applying animation
  }
});



document.getElementById('toggleButton2').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior

  const block2 = document.getElementById('block2');

  // Toggle Act 1 and Act 2 visibility
  if (block2.classList.contains('visible')) {
      // // Collapse Act 2
      block2.classList.remove('visible');
      block2.classList.add('hidden');
      
      // Wait for the collapse to finish (after 500ms)
      setTimeout(() => {
          block2.style.display = 'none'; // Hide Block 2 completely after collapse
      }, 500); // Wait for 0.5s for the collapse animation


  } else {
      // Expand Act 2
      block2.style.display = 'block'; // Make Block 2 visible before animating
      setTimeout(() => {
          block2.classList.remove('hidden');
          block2.classList.add('visible');
          
          // Smoothly scroll to Block 2
          block2.scrollIntoView({ behavior: 'smooth' });
      }, 50); // Slight delay before applying animation
  }
});