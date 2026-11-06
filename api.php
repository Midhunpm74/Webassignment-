<?php

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    header('Allow: GET');
    echo json_encode(['error' => 'Only GET requests are supported.']);
    exit;
}

$dataFile = __DIR__ . '/data.json';

if (!is_readable($dataFile)) {
    http_response_code(500);
    echo json_encode(['error' => 'The restaurant data file is unavailable.']);
    exit;
}

$json = file_get_contents($dataFile);
$data = json_decode($json, true);

if ($data === null || !isset($data['graph']) || !is_array($data['graph'])) {
    http_response_code(500);
    echo json_encode(['error' => 'The restaurant data is invalid.']);
    exit;
}

echo json_encode($data, JSON_UNESCAPED_SLASHES);
