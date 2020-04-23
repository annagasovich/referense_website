<?

$defaults = array('name' => 'Не указано', 'phone' => 'Не указано', 'email' => 'Не указано');

foreach ($_POST as $key => $value) {
	$defaults[$key] = $value;
}

 $queryUrl = 'https://referens.bitrix24.ru/rest/26/uuirp2zlq684n6pz/crm.lead.add.json';
 $queryData = http_build_query(array(
 'fields' => array(
 "TITLE" => $defaults['name'],
 "NAME" => $defaults['name'],
 "STATUS_ID" => "NEW",
 "OPENED" => "Y",
 "ASSIGNED_BY_ID" => 1,
 "PHONE" => array(array("VALUE" => $defaults['phone'], "VALUE_TYPE" => "WORK" )),
 ),
 'params' => array("REGISTER_SONET_EVENT" => "Y")
 ));

 $curl = curl_init();
 curl_setopt_array($curl, array(
 CURLOPT_SSL_VERIFYPEER => 0,
 CURLOPT_POST => 1,
 CURLOPT_HEADER => 0,
 CURLOPT_RETURNTRANSFER => 1,
 CURLOPT_URL => $queryUrl,
 CURLOPT_POSTFIELDS => $queryData,
 ));

 $result = curl_exec($curl);
 curl_close($curl);

 $result = json_decode($result, 1);

 if (array_key_exists('error', $result)) echo "Ошибка при сохранении лида: ".$result['error_description']."";

?>