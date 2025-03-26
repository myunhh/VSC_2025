num_of_case = int(input())

for i in range(1, num_of_case):
    x1, y1, r1, x2, y2, r2 = map(int, input().split)
    
    dist_bwn_12 = int(((x1-x2)**2 + (y1-y2)**2)**(1/2))

    if(dist_bwn_12 > abs(r1 - r2)):
        print(-1)
    elif(dist_bwn_12 < abs(r1 - r2)):
        print()
    else:
        x_mid = 
        print()