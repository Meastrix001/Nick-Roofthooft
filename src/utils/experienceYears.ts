const durationSince = (startYear: number, startMonth: number): { years: number; months: number } => {
    const now = new Date();
    let years = now.getFullYear() - startYear;
    let months = now.getMonth() + 1 - startMonth;
    if (months < 0) {
        years -= 1;
        months += 12;
    }
    return { years, months };
};

export const coding = durationSince(2020, 8);

export const fullTime = durationSince(2022, 10);
