def simple_sequence(n):
    if n == 0:
        return 0
    else:
        return simple_sequence(n-1)+5
print(simple_sequence(8))