# 동,서,남,북
dx = [1,-1,0,0]
dy = [0,0,-1,1]

# 현재 위치
x,y = 0,0

for i in range(4):
    # 다음 위치
    nx = x + dx[i]
    ny = y + dy[i]
    print(nx,ny)