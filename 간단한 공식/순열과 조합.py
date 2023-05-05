# 순열
# 반복 가능한 객체(=길이가 n인)에 대해서 
# 중복을 허용하지 않고 r개를 뽑아서 나열한다.
# 뽑힌 순서대로 나열하기 때문에 순서가 의미가 있다. 
# (즉, 같은 값이 뽑히더라도 순서가 다르면 다른 경우의 수로 취급한다.)

# from itertools import permutations

# for i in permutations([1,2,3,4], 2):
#     print(i, end=" ")


# 조합
# 반복 가능한 객체(=길이가 n인)에 대해서 중복을 허용하지 않고 
# r개를 뽑는다.
# 어떤 것을 뽑는지만 중요하게 보기 때문에 
# 뽑은 순서는 고려하지 않는다.

from itertools import combinations

for i in combinations([1,2,3,4], 2):
    print(i, end=" ") 