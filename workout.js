const workoutData = {
  chest: {
    title: 'Chest Day',
    exercises: [
      'Dumbbell Bench Press',
      'Incline Dumbbell Press',
      'Chest Press Machine',
      'Cable Crossover'
    ],
    note: 'Optional finisher: Push-ups'
  },
  back: {
    title: 'Back Day',
    exercises: ['Deadlift', 'Barbell Row', 'Lat Pulldown', 'Seated Cable Row', 'Rope Face Pull']
  },
  shoulders: {
    title: 'Shoulders Day',
    exercises: [
      'Overhead Dumbbell Press',
      'Machine Shoulder Press',
      'Lateral Raises (very important for shoulder width)',
      'Upright Rows',
      'Rear Delt Fly / Face Pull'
    ],
    note: 'Front, side, and rear delts all covered.'
  },
  legs: {
    title: 'Legs Day',
    exercises: ['Barbell Back Squats', 'Leg Press', 'Leg Curl', 'Leg Extension', 'Goblet Squats']
  },
  arms: {
    title: 'Arms Day',
    exercises: [
      'EZ Bar Curl',
      'Preacher Curl',
      'Hammer Curl',
      'Cable Pushdown',
      'Single-Arm Overhead Dumbbell French Press',
      'Cable Overhead Extension'
    ]
  }
};

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function imagePath(muscle, exercise, index) {
  return `images/exercises/${muscle}-${slugify(exercise)}-${index}.svg`;
}

function renderWorkout(muscle) {
  const data = workoutData[muscle];
  if (!data) return;

  document.querySelector('#workoutTitle').textContent = data.title;
  const list = document.querySelector('#exerciseList');

  data.exercises.forEach((exercise) => {
    const card = document.createElement('article');
    card.className = 'exercise-card';

    const title = document.createElement('h3');
    title.textContent = exercise;

    const images = document.createElement('div');
    images.className = 'image-grid';

    for (let i = 1; i <= 3; i += 1) {
      const img = document.createElement('img');
      img.src = imagePath(muscle, exercise, i);
      img.alt = `${exercise} static demo ${i}`;
      img.loading = 'lazy';
      images.appendChild(img);
    }

    card.append(title, images);
    list.appendChild(card);
  });

  if (data.note) {
    const note = document.querySelector('#note');
    note.textContent = data.note;
  }
}

renderWorkout(document.body.dataset.muscle);
