#! coding:utf-8
data_list = []
for n in range(1, 11):
    tmp = "\
    {\
      'id': %s,\
      'url': 'http://127.0.0.1:8080/image/00%s.png',\
      'decsription': '...',\
      'group': '人物',\
      'image': '汤唯',\
      'uploaddate': '2015-07-15',\
      'editdate': '2015-07-18',\
      'upvote': 258,\
      'downvote': 45,\
      'sharetimes': 300,\
      'poer': 'andyhelix',\
    }," % (str(n), str(n))
    #tmp = "'id':{0}".format(str(n))
    data_list.append(tmp)

with open('fake.json', 'w') as f:
    f.write(''.join(data_list))
    f.close()
