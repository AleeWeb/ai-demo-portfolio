function switchTab(index) {
    // Remove active class from all tabs and content
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding content
    document.querySelectorAll('.tab-button')[index].classList.add('active');
    document.getElementById(`tab-${index}`).classList.add('active');
}