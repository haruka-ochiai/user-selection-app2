document.addEventListener('DOMContentLoaded', () => {
    const users =[
        { id:1, name: 'User1' },
        { id:2, name: 'User2' },
        { id:3, name: 'User3' },
        { id:4, name: 'User4' },
        { id:5, name: 'User5' },
        { id:6, name: 'User6' },
        { id:7, name: 'User7' },
        { id:8, name: 'User8' },
        { id:9, name: 'User9' },
        { id:10, name: 'User10' },
        { id:11, name: 'User11' },
        { id:12, name: 'User12' },
        { id:13, name: 'User13' },
        { id:14, name: 'User14' },
        { id:15, name: 'User15' },
        { id:16, name: 'User16' },
        { id:17, name: 'User17' },
        { id:18, name: 'User18' },
        { id:19, name: 'User19' },
        { id:20, name: 'User20' },
        { id:21, name: 'User21' },
        { id:22, name: 'User22' },
        { id:23, name: 'User23' },
        { id:24, name: 'User24' },
        { id:25, name: 'User25' },
        { id:26, name: 'User26' },
        { id:27, name: 'User27' },
        { id:28, name: 'User28' },
        { id:29, name: 'User29' },
        { id:30, name: 'User30' },
    ];

    const selectButton = document.getElementById('select-button');
    const userName = document.getElementById('user-name');
    const selectedUserName = document.getElementById('selected-user-name');

    let isSpinning = false;
    let spinInterval;
    
    function startSpinning () {
        spinInterval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * users.length);
            userName.textContent = users[randomIndex].name;
        }, 10);
    }

    function stopSpinning () {
        clearInterval(spinInterval);
        const selectedUser = userName.textContent;
        selectedUserName.textContent = selectedUser;
        isSpinning = false;
        selectButton.textContent = 'ランダムに選ぶ';
    }

    selectButton.addEventListener('click', () => {
        if (!isSpinning) {
            startSpinning();
            isSpinning = true;
            selectButton.textContent = '止める';
        } else {
            stopSpinning();
        }
    });
});