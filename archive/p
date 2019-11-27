#! /usr/local/bin/perl5

while (<>) {
	chop;
	s/://;
	my($name,$value)=split;
	next if ! $name;
	$JobInfo{$name}=$value;
}

$mailMsg = $JobInfo{'name'}." was started again. ";
$mailMsg .= "It exited with a return code of ".$JobInfo{'errorCode'};
system("echo $mailMsg | mail afs-admins");

if ($JobInfo{'rsCount'} gt 5) {
	system("echo $mailMsg pipe beep  on-call-admin");
}
