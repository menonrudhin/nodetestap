#docker build . -t rudhin28/nodetestap:latest

VER=`git log -1|head -1|awk '{print $2}'|cut -c1-5`

echo "version : $VER"

docker buildx build --platform linux/amd64 --rm . -t rudhin28/nodetestap:arch64"${VER}"
if [ $? -eq 0 ]
then
	echo "build successful"
	docker push rudhin28/nodetestap:arch64"${VER}"
	if [ $? -eq 0 ]
	then
		echo "pushed successfully"
	else
		echo "*** push failed ***"
		exit -2
	fi
else
	echo "*** build failed ***"
	exit -1
fi
