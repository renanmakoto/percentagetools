value = int(input('Enter value: '))

seventyPercentage = value * 0.70
thirtyPercentage = value * 0.30

print(f'70% of {value} is {seventyPercentage:.2f}')
print(f'30% of {value} is {thirtyPercentage:.2f}')

proof = input('Would you like to have a sanity check of it? [Y/N] ').upper()

if proof == 'Y':
    seventyDivision = (seventyPercentage * 100) / 70
    thirtyDivision = (thirtyPercentage * 100) / 30
    print(f'({seventyPercentage:.2f} * 100) / 70 = {seventyDivision:.2f}')
    print(f'({thirtyPercentage:.2f} * 100) / 30 = {thirtyDivision:.2f}')

print('Bye')