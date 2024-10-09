import sys

def sort205(p,r,A):
    if p < r :
        q = divide (p,r,A)
        sort205(p,q-1,A)
        sort205(q+1,r,A)

def divide(p,r,A):
    x=A[r]
    i=p-1
    for j in range(p,r):
        if A[j] <= x:
            i = i + 1
            A[i], A[j] = A[j], A[i]
    A[i+1], A[r]=A[r], A[i+1]

def read_numbers_from_file(filename):
    with open(filename, 'r') as file:
        numbers = [int(line.strip()) for line in file.readlines()]
    return numbers  

if __name__ == "__main__":
    # Check if the filename was passed as a command-line argument
    if len(sys.argv) != 2:
        print("Usage: python sort.py <filename>")
        sys.exit(1)
    filename = sys.argv[1]
    A = read_numbers_from_file(filename)
    sort205(0, len(A) - 1, A)
    print("Sorted numbers:")
    for num in A:
        print(num)