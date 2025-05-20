def sum(num_fir, num_sec):
  sum = num_fir + num_sec
  
  return sum

num_fir = int(input("첫번째 수 : "))
num_sec = int(input("두번쨰 수 : "))

result = sum(num_fir, num_sec)

print(f"{num_fir}와 {num_sec}의 합은 {result}")