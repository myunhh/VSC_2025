print("369게임")
num = int(input("1부터 어디까지 진행할까요? "))

for i in range(num):
  i += 1
  x = str(i)

  if('3' in x or '6' in x or '9' in x):
    print("짝", end = ' ')
  else:
    print(f'{i}', end = ' ')