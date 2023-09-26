perweek = int(input('How much per week? '))
totalweeks = int(input('How many weeks? '))

weeksprice = perweek * totalweeks

print(f'${perweek:.2f} * {totalweeks} weeks = ${weeksprice:.2f}')

tenpercentloa = (weeksprice * 10) / 100
resttenpercent = weeksprice * 0.90

print(f'The 10% of the total: ${tenpercentloa:.2f}')
print(f'Outstanding fee: ${resttenpercent:.2f}')
