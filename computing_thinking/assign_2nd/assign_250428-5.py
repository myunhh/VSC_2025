trevel_list = []

menu_text = """----------------------------
    여행지 관리 프로그램
----------------------------
1. 여행장소 목록 출력
2. 여행장소 추가
3. 여행장소 삭제
4. 종료하기"""

while True:

  print(menu_text)

  menu = int(input("메뉴를 선택하시오 => "))

  if(menu == 1):
    print(trevel_list)

  elif(menu == 2):
    trevel_add = str(input("추가할 여행지를 입력하세요 => "))
    trevel_list.append(trevel_add)

  elif(menu == 3):
    print(trevel_list)
    trevel_remove = int(input("삭제할 여행지의 인덱스 번호를 입력하세요 => "))
    del trevel_list[trevel_remove]
    print(f"여행지가 삭제되었습니다. 여행지 목록 => {trevel_list}")

  elif(menu == 4):
    print("종료합니다.")
    break

  else:
    print("1, 2, 3, 4 중 하나를 입력하세요")