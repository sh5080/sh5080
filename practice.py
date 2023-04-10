words = 'Connect Foundation'

if 'F' in words:
    words = words.lower()
    words = words[:7] + '&'+words[8:]
    print(words)

else:
    print(words)
print(words)