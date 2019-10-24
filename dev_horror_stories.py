def unspeakable_horrors(title, story):
    return f"{title}\n\n{story}"

title_num_1 = "I just 'rm -rf /*' my system"
story_num_1 = "Long story short, I was too lazy to select all files in a directory and instead wanted to\
'rm -rf /*' it instead. Asking my CTO if this is the right way to do it, he said,\
I think you should do 'rm -rf ./*'. After some debate and logging the path it looks\
like 'rm -rf /*' should be fine...\nIt wasn’t.\nPlease kill me."

print(unspeakable_horrors(title_num_1, story_num_1))
