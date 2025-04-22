const countrySelect = document.getElementById('country');
const regionLabel = document.getElementById('region-label');

const regionNames = {
    us: "State",
    ca: "Province",
    uk: "County",
    au: "State/Territory",
    other: "Region"
};

countrySelect.addEventListener('change', () => {
    const selected = countrySelect.value;
    regionLabel.textContent = regionNames[selected] || "Region";
});
