import re
from pathlib import Path

# regex list
re_clean_line = re.compile(r"^.*?\|\|.*?\|\|.*\|\|(.*)$")
re_parenth = re.compile(r"[{(].*?[})]")


def extract_file_text(file_path):

    # read file content
    file_content = open(file_path, 'r', encoding='utf-8')

    # iterate lines
    text_lines = list()
    for line in file_content:

        # clean line
        clean_text = line[line.rfind('|') + 1:]

        # remove noise
        clean_text = re.sub(re_parenth, '', clean_text, 0)

        # append
        text_lines.append(clean_text.strip())

    return text_lines


# load corpus
corpus_path = "/Users/himmelroman/projects/ml_prophet/data/corpora/rus_synod_1876/russian_synodal_1876.txt"
text_lines = extract_file_text(corpus_path)
Path(corpus_path).with_name(f'{Path(corpus_path).stem}.txt').write_text('\n'.join(text_lines), encoding="utf-8")

text = Path("/Users/himmelroman/projects/ml_prophet/data/corpora/rus_synod_1876/russian_synodal_1876.txt").read_text()
print(set(text))
