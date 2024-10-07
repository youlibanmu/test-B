const catImages = [
    {
        src: 'cat1.jpg',
        description: 'この猫はとても遊び好きです！'
    },
    {
        src: 'cat2.jpg',
        description: 'この猫は昼寝が大好きです。'
    },
    {
        src: 'cat3.jpg',
        description: 'この猫はとてもおとなしい性格です。'
    }
];

let currentCatIndex = 0;

document.getElementById('prev-cat').addEventListener('click', () => {
    currentCatIndex = (currentCatIndex - 1 + catImages.length) % catImages.length;
    updateCatImage();
});

document.getElementById('next-cat').addEventListener('click', () => {
    currentCatIndex = (currentCatIndex + 1) % catImages.length;
    updateCatImage();
});

function updateCatImage() {
    const currentCat = catImages[currentCatIndex];
    document.getElementById('current-cat-image').src = currentCat.src;
    document.getElementById('cat-description-text').innerText = currentCat.description;
}
