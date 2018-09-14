
        const calculationSlider = {
            init() {
                if (document.getElementById('calculator-home')) {
                    let downstream = document.getElementById('calculator__slider--downstream'),
                        fluzzer = document.getElementById('calculator__slider--fluzzer'),
                        personal = document.getElementById('calculator__slider--personal');
                    noUiSlider.create(downstream, { start: 2500, connect: [true, false], step: 1, range: { 'min': 1, 'max': 65534 } });
                    downstream.noUiSlider.on('update', (values, handle) => { downstream.nextElementSibling.value = Math.round(values[handle]); if (downstream.noUiSlider && fluzzer.noUiSlider && personal.noUiSlider) { calculationSlider.calculateTotals(downstream, fluzzer, personal); } });
                    downstream.nextElementSibling.addEventListener('change', () => { downstream.noUiSlider.set(this.value); });
                    noUiSlider.create(fluzzer, { start: 100, connect: [true, false], step: 1, range: { 'min': 50, 'max': 2500 } });
                    fluzzer.noUiSlider.on('update', (values, handle) => { fluzzer.nextElementSibling.value = Math.round(values[handle]); if (downstream.noUiSlider && fluzzer.noUiSlider && personal.noUiSlider) { calculationSlider.calculateTotals(downstream, fluzzer, personal); } });
                    fluzzer.nextElementSibling.addEventListener('change', () => { fluzzer.noUiSlider.set(this.value); });
                    noUiSlider.create(personal, { start: 150, connect: [true, false], step: 1, range: { 'min': 50, 'max': 2500 } });
                    personal.noUiSlider.on('update', (values, handle) => { personal.nextElementSibling.value = Math.round(values[handle]); if (downstream.noUiSlider && fluzzer.noUiSlider && personal.noUiSlider) { calculationSlider.calculateTotals(downstream, fluzzer, personal); } });
                    personal.nextElementSibling.addEventListener('change', () => { personal.noUiSlider.set(this.value); });
                }
                if (document.getElementById('calculator-utilities')) {
                    let downstream = document.getElementById('calculator__slider--downstream'),
                        fluzzer = document.getElementById('calculator__slider--fluzzer'),
                        personal = document.getElementById('calculator__slider--personal'),
                        spendings = document.getElementById('calculator__slider--spendings');
                    noUiSlider.create(downstream, { start: 2500, connect: [true, false], step: 1, range: { 'min': 1, 'max': 65534 } });
                    downstream.noUiSlider.on('update', (values, handle) => { downstream.nextElementSibling.value = Math.round(values[handle]); if (spendings.noUiSlider && fluzzer.noUiSlider && personal.noUiSlider && spendings.noUiSlider) { calculationSlider.calculateReward(downstream, fluzzer, personal, spendings); } });
                    downstream.nextElementSibling.addEventListener('change', () => { downstream.noUiSlider.set(this.value); });
                    noUiSlider.create(fluzzer, { start: 100, connect: [true, false], step: 1, range: { 'min': 50, 'max': 2500 } });
                    fluzzer.noUiSlider.on('update', (values, handle) => { fluzzer.nextElementSibling.value = Math.round(values[handle]); if (spendings.noUiSlider && fluzzer.noUiSlider && personal.noUiSlider && spendings.noUiSlider) { calculationSlider.calculateReward(downstream, fluzzer, personal, spendings); } });
                    fluzzer.nextElementSibling.addEventListener('change', () => { fluzzer.noUiSlider.set(this.value); });
                    noUiSlider.create(personal, { start: 150, connect: [true, false], step: 1, range: { 'min': 50, 'max': 2500 } });
                    personal.noUiSlider.on('update', (values, handle) => { personal.nextElementSibling.value = Math.round(values[handle]); if (spendings.noUiSlider && fluzzer.noUiSlider && personal.noUiSlider && spendings.noUiSlider) { calculationSlider.calculateReward(downstream, fluzzer, personal, spendings); } });
                    personal.nextElementSibling.addEventListener('change', () => { personal.noUiSlider.set(this.value); });
                    noUiSlider.create(spendings, { start: 1000, connect: [true, false], step: 1, range: { 'min': 1, 'max': 100000 } });
                    spendings.noUiSlider.on('update', (values, handle) => { spendings.nextElementSibling.value = Math.round(values[handle]); if (spendings.noUiSlider && fluzzer.noUiSlider && personal.noUiSlider && spendings.noUiSlider) { calculationSlider.calculateReward(downstream, fluzzer, personal, spendings); } });
                    spendings.nextElementSibling.addEventListener('change', () => { spendings.noUiSlider.set(this.value); });
                }
                if (document.getElementById('calculator-utilities-seats')) {
                    let number = document.getElementById('calculator__slider--number'),
                        price = document.getElementById('calculator__slider--price'),
                        mIncome = document.getElementById('calculator__slider--month-earnings'),
                        yIncome = document.getElementById('calculator__slider--year-earnings'),
                        cashback = document.getElementById('calculator__slider--cashback');
                    noUiSlider.create(number, { start: 9820, connect: [true, false], step: 1, range: { 'min': 1, 'max': 65534 } });
                    number.noUiSlider.on('update', (values, handle) => { number.nextElementSibling.value = Math.round(values[handle]); if (number.noUiSlider && price.noUiSlider && mIncome.noUiSlider && yIncome.noUiSlider && cashback.noUiSlider) { calculationSlider.calculateSeatValue(number, price, mIncome, yIncome, cashback); } });
                    number.nextElementSibling.addEventListener('change', () => { number.noUiSlider.set(this.value); });
                    noUiSlider.create(price, { start: 0.1, connect: [true, false], step: 0.1, range: { 'min': 0.1, 'max': 100 } });
                    price.noUiSlider.on('update', (values, handle) => { price.nextElementSibling.value = values[handle]; if (number.noUiSlider && price.noUiSlider && mIncome.noUiSlider && yIncome.noUiSlider && cashback.noUiSlider) { calculationSlider.calculateSeatValue(number, price, mIncome, yIncome, cashback); } });
                    price.nextElementSibling.addEventListener('change', () => { price.noUiSlider.set(this.value); });
                    noUiSlider.create(mIncome, { start: 500, connect: [true, false], step: 1, range: { 'min': 10, 'max': 5000 } });
                    mIncome.noUiSlider.on('update', (values, handle) => { mIncome.nextElementSibling.value = Math.round(values[handle]); if (number.noUiSlider && price.noUiSlider && mIncome.noUiSlider && yIncome.noUiSlider && cashback.noUiSlider) { calculationSlider.calculateSeatValue(number, price, mIncome, yIncome, cashback); } });
                    mIncome.nextElementSibling.addEventListener('change', () => { mIncome.noUiSlider.set(this.value); });
                    noUiSlider.create(yIncome, { start: 5000, connect: [true, false], step: 1, range: { 'min': 2500, 'max': 100000 } });
                    yIncome.noUiSlider.on('update', (values, handle) => { yIncome.nextElementSibling.value = Math.round(values[handle]); if (number.noUiSlider && price.noUiSlider && mIncome.noUiSlider && yIncome.noUiSlider && cashback.noUiSlider) { calculationSlider.calculateSeatValue(number, price, mIncome, yIncome, cashback); } });
                    yIncome.nextElementSibling.addEventListener('change', () => { yIncome.noUiSlider.set(this.value); });
                    noUiSlider.create(cashback, { start: 0, connect: [true, false], step: 1, range: { 'min': 0, 'max': 100000 } });
                    cashback.noUiSlider.on('update', (values, handle) => { cashback.nextElementSibling.value = Math.round(values[handle]); if (number.noUiSlider && price.noUiSlider && mIncome.noUiSlider && yIncome.noUiSlider && cashback.noUiSlider) { calculationSlider.calculateSeatValue(number, price, mIncome, yIncome, cashback); } });
                    cashback.nextElementSibling.addEventListener('change', () => { cashback.noUiSlider.set(this.value); });
                }
            },
            calculateReward(downstream, fluzzer, personal, spendings) {
                var rewards_percentage = 100 * (0.025 * 0.6 + 0.04 * 0.3 + 0.1 * 0.1);
                var personal_expenditure_income = (personal.noUiSlider.get() * rewards_percentage * 0.01 * 0.5);
                var influence_tokens_bonus_income = (spendings.noUiSlider.get() * fluzzer.noUiSlider.get() * rewards_percentage * 0.01 * 0.5) / 15;
                var downstream_expenditure_income = (fluzzer.noUiSlider.get() * rewards_percentage * 0.01 * 0.5 * downstream.noUiSlider.get()) / 15;
                var estimated_income = personal_expenditure_income + downstream_expenditure_income + influence_tokens_bonus_income;
                document.querySelector('.calculator__result__income').innerHTML = '$' + parseFloat(estimated_income).toFixed(2).toLocaleString(undefined, { maximumFractionDigits: 2 });
            },
            calculateTotals(downstream, fluzzer, personal) {
                const rewardsPercentage = 100 * (0.025 * 0.6 + 0.04 * 0.3 + 0.1 * 0.1);
                var number = ((personal.noUiSlider.get() * rewardsPercentage * 0.01 * 0.5) + (fluzzer.noUiSlider.get() * rewardsPercentage * 0.01 * 0.5 * downstream.noUiSlider.get()) / 15);
                var numberother = personal.noUiSlider.get();
                document.getElementById('result-income').innerHTML = '$' + number.toLocaleString(undefined, { maximumFractionDigits: 2 });
                document.getElementById('result-income-other').innerHTML = '$' + (numberother * .06).toLocaleString(undefined, { maximumFractionDigits: 2 });
            },
            calculateSeatValue(number, price, mIncome, yIncome, cashback) {
                var earnings_30d = mIncome.noUiSlider.get();
                var earnings_365d = yIncome.noUiSlider.get();
                var downstream_fluzzers = number.noUiSlider.get();
                var cashback_value = cashback.noUiSlider.get();
                var apx_sixth_month_earnings = (earnings_365d - earnings_30d) / 11;
                var avg_cmgr = Math.pow((earnings_30d / apx_sixth_month_earnings), (1.0 / 6.0)) - 1;
                var monthly_earnings = earnings_365d / 12;
                var min_max_ratio = Math.min(earnings_30d / monthly_earnings, 1.0);
                avg_cmgr = Math.min(0.045 * min_max_ratio, avg_cmgr);
                avg_cmgr = Math.max(0.01 * min_max_ratio, avg_cmgr);
                var avg_cagr = Math.pow(avg_cmgr + 1, 12) - 1;
                var fluztoken_seat_value = 15000.0 * (price.noUiSlider.get());
                var ep = [];
                var prev_year_downstream = downstream_fluzzers;
                var cash_flow_value = 0.0;
                for (var i = 1; i <= 10; i++) {
                    var this_year_downstream = Math.min(prev_year_downstream * 1.30, 65534);
                    var downstream_factor = (this_year_downstream / prev_year_downstream) - 1;
                    var this_year_earnings = (earnings_365d * Math.pow(1 + avg_cagr, i)) * (1 + downstream_factor);
                    ep.push({ year: i, year_earnings: this_year_earnings });
                    prev_year_downstream = this_year_downstream;
                    var present_value_of_earnings = this_year_earnings / Math.pow((1 + 0.55), i)
                    cash_flow_value += present_value_of_earnings;
                }
                document.querySelector('.calculator__result__value').innerHTML = '$' + parseFloat(parseFloat(cash_flow_value) + parseFloat(fluztoken_seat_value) + parseFloat(cashback_value)).toFixed(2).toLocaleString(undefined, { maximumFractionDigits: 2 });
                ep.forEach(ep => {
                    let row = document.querySelector('#year-' + ep.year),
                        year = row.childNodes[0],
                        earnings = row.childNodes[1];
                    year.innerHTML = ep.year;
                    earnings.innerHTML = '$' + parseFloat(ep.year_earnings).toFixed(2).toLocaleString(undefined, { maximumFractionDigits: 2 });
                });
            }
        };
        calculationSlider.init();
