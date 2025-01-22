const community = [
    { name: "Alice", funds: 2000, address: "bc1qgdjqv0av3q56jvd82tkdjpy7gdp9ut8tlqmgrpmv24sq90ecnvqqjwvw97" },
    { name: "Bob", funds: 5000, address: "bc1qexampleaddress234" },
    { name: "Charlie", funds: 100000, address: "bc1qexampleaddress567" },
    // Add more community members as needed
];

function displayCommunity() {
    const communityContainer = document.getElementById('community');
    community.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'member';
        memberDiv.innerHTML = `
            <span>${member.name}</span>
            <span>${member.funds} BTC</span>
            <div class="address">${member.address}</div>
        `;
        communityContainer.appendChild(memberDiv);
    });
}

document.addEventListener('DOMContentLoaded', displayCommunity);
