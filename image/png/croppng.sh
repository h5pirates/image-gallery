FOLD_PNG="/home/liuxy/code/javascript/image-gallery/images/png"
i=1
for file in ${FOLD_PNG}/*.png; do
    filename=$file
    echo $filename
    i=$((i+1));
    echo "00"$i
done
