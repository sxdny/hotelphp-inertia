<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateRoomsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name.required' => 'A name is required.',
            'name.doesnt_start_with' => 'The room name must not start with a number.',
            'description.required' => 'You must insert a description for the room.',
            'state.required' => 'Please select an state.',
            'type.required' => 'Please select a type.',
            'capacity.required' => 'Please insert a capacity.',
            'capacity.numeric' => 'You must insert a number.',
            'capacity.min' => 'The room must have at least 1 of capacity.',
            'price.required' => 'A price is required.',
            'price.numeric' => 'You must insert a number',
        ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'doesnt_start_with:0,1,2,3,4,5,6,7,8,9' , 'max:255'],
            'description' => ['required', 'string', 'max:255'],
            'state' => ['required', Rule::in(['available', 'booked', 'not available'])],
            'type' => ['required', Rule::in(['studio', 'single', 'double', 'presidential'])],
            'capacity' => ['required', 'numeric', 'max:4', 'min:1'],
            'price' => ['required', 'numeric', 'max:200'],
        ];
    }
}
