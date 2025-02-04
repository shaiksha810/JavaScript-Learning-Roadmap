// Get DOM elements
const topicsContainer = document.getElementById('topicsContainer');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');

// Load completed topics from localStorage
let completedTopics = JSON.parse(localStorage.getItem('completedTopics')) || [];

// Update progress bar
function updateProgress() {
    const progress = (completedTopics.length / roadmap.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${Math.round(progress)}%`;
}

// Toggle topic completion
function toggleTopic(day) {
    if (completedTopics.includes(day)) {
        completedTopics = completedTopics.filter(d => d !== day);
    } else {
        completedTopics.push(day);
    }
    localStorage.setItem('completedTopics', JSON.stringify(completedTopics));
    updateProgress();
    renderTopics();
}

// Create topic card HTML
function createTopicCard(topic) {
    const isCompleted = completedTopics.includes(topic.day);
    
    return `
        <div class="topic-card">
            <div class="topic-header">
                <h3 class="topic-title">Day ${topic.day}: ${topic.title}</h3>
                <button 
                    class="complete-button ${isCompleted ? 'completed' : ''}"
                    onclick="toggleTopic(${topic.day})"
                >
                    ${isCompleted ? 
                        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>' :
                        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>'
                    }
                </button>
            </div>
            <p class="topic-description">${topic.description}</p>
            
            <div class="concepts-list">
                <h4 class="section-title">Key Concepts:</h4>
                <ul>
                    ${topic.concepts.map(concept => `<li>${concept}</li>`).join('')}
                </ul>
            </div>

            <div class="exercises">
                <h4 class="section-title">Exercises:</h4>
                ${topic.exercises.map(exercise => `
                    <div class="exercise">
                        <h5 class="exercise-title">${exercise.title}</h5>
                        <p class="exercise-description">${exercise.description}</p>
                        <span class="difficulty-badge difficulty-${exercise.difficulty.toLowerCase()}">
                            ${exercise.difficulty}
                        </span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Render all topics
function renderTopics() {
    topicsContainer.innerHTML = roadmap.map(topic => createTopicCard(topic)).join('');
}

// Initial render
renderTopics();
updateProgress();

