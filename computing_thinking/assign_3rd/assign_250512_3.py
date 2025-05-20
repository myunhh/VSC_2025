def get_area(radius):
  area = radius * radius * 3.14

  return area


radius = int(input("반지름 : "))
result = get_area(radius)

print("반지름이 %d인 원의 넓이 : %.2f" %(radius, result))